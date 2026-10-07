// Student Task Manager
// Handles adding, showing, completing, deleting and searching tasks.

const taskForm = document.getElementById("task-form");
const titleInput = document.getElementById("task-title");
const descInput = document.getElementById("task-desc");
const taskList = document.getElementById("task-list");
const emptyMessage = document.getElementById("empty-message");
const searchInput = document.getElementById("task-search");
const taskCount = document.getElementById("task-count");

const STORAGE_KEY = "studentTasks";

// Load saved tasks from the browser (if any)
let tasks = loadTasks();

function loadTasks() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    return saved ? JSON.parse(saved) : [];
  } catch (error) {
    return [];
  }
}

function saveTasks() {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));
  } catch (error) {
    console.warn("Could not save tasks:", error);
  }
}

// Create a new task from the form
function addTask(title, description) {
  tasks.push({
    id: Date.now(),
    title: title,
    description: description,
    completed: false
  });
  saveTasks();
  renderTasks();
}

// Switch a task between completed and not completed
function toggleTask(id) {
  tasks = tasks.map(function (task) {
    if (task.id === id) {
      task.completed = !task.completed;
    }
    return task;
  });
  saveTasks();
  renderTasks();
}

// Remove a task from the list
function deleteTask(id) {
  tasks = tasks.filter(function (task) {
    return task.id !== id;
  });
  saveTasks();
  renderTasks();
}

// Return only the tasks that match the search text
function getVisibleTasks() {
  const query = searchInput.value.trim().toLowerCase();
  if (query === "") {
    return tasks;
  }
  return tasks.filter(function (task) {
    return (
      task.title.toLowerCase().includes(query) ||
      task.description.toLowerCase().includes(query)
    );
  });
}

// Show the tasks on the page
function renderTasks() {
  taskList.innerHTML = "";
  const visibleTasks = getVisibleTasks();

  visibleTasks.forEach(function (task) {
    const item = document.createElement("li");
    item.className = "task-item" + (task.completed ? " completed" : "");

    const info = document.createElement("div");
    const heading = document.createElement("h3");
    heading.textContent = task.title;
    const details = document.createElement("p");
    details.textContent = task.description || "No description";
    info.appendChild(heading);
    info.appendChild(details);

    const actions = document.createElement("div");
    actions.className = "task-actions";

    const doneButton = document.createElement("button");
    doneButton.className = "btn btn-small btn-done";
    doneButton.textContent = task.completed ? "Undo" : "Complete";
    doneButton.addEventListener("click", function () {
      toggleTask(task.id);
    });

    const deleteButton = document.createElement("button");
    deleteButton.className = "btn btn-small btn-delete";
    deleteButton.textContent = "Delete";
    deleteButton.addEventListener("click", function () {
      deleteTask(task.id);
    });

    actions.appendChild(doneButton);
    actions.appendChild(deleteButton);
    item.appendChild(info);
    item.appendChild(actions);
    taskList.appendChild(item);
  });

  const doneCount = tasks.filter(function (task) {
    return task.completed;
  }).length;
  taskCount.textContent =
    "Showing " + visibleTasks.length + " of " + tasks.length +
    " tasks (" + doneCount + " completed)";

  if (tasks.length === 0) {
    emptyMessage.textContent = "No tasks yet. Add your first task above.";
  } else {
    emptyMessage.textContent = "No tasks match your search.";
  }
  emptyMessage.style.display = visibleTasks.length === 0 ? "block" : "none";
}

searchInput.addEventListener("input", renderTasks);

taskForm.addEventListener("submit", function (event) {
  event.preventDefault();
  const title = titleInput.value.trim();
  if (title === "") {
    return;
  }
  addTask(title, descInput.value.trim());
  taskForm.reset();
  titleInput.focus();
});

renderTasks();
