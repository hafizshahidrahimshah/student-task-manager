# Student Task Management System (Web Application)

A simple web application that helps students plan their study work. You can add tasks, see them in a list, mark them as completed, delete them and search them. The project was built to practise a real Git and GitHub workflow.

**Live demo:** https://hafizshahidrahimshah.github.io/student-task-manager/

## Team Members

| Name | Roll No. | GitHub | Role |
|------|----------|--------|------|
| Hafiz Shahid Rahim Shah | BCSF23M555 | [@hafizshahidrahimshah](https://github.com/hafizshahidrahimshah) | Student 1 and Student 2 (solo submission) |

> This was done as a solo submission. Both "Student 1" and "Student 2" roles were done by the same person, using two separate local clones of the repository (`student-task-manager/` and `student2/student-task-manager/`).

## Features

- Add a task with a title and a short description
- Show all tasks as cards
- Mark a task as completed (and undo it)
- Delete a task
- Search tasks by title or description
- Task count with number of completed tasks
- Tasks are saved in the browser (localStorage)
- Responsive layout for mobile screens

## Technologies

- HTML5
- CSS3 (CSS variables, Flexbox, media queries)
- JavaScript (DOM, events, localStorage)
- Git and GitHub

## Git Workflow

1. Create the project and run `git init`
2. Make small, meaningful commits
3. Push `main` to GitHub
4. Create a feature branch for every new feature
5. Push the branch and open a Pull Request
6. Review the code, then merge into `main`
7. Pull the latest `main` before starting new work
8. Tag a stable version and publish a release

## Branches

| Branch | Purpose |
|--------|---------|
| `main` | Stable code |
| `feature/task-form` | Task input form (PR #4) |
| `feature/task-style` | Styling and responsive layout (PR #5, closes #3) |
| `feature/task-actions` | Add, complete and delete tasks (PR #6, closes #2) |
| `docs/readme-title-system` | README title change (merge conflict demo) |
| `docs/readme-title-application` | README title change (merge conflict demo) |
| `feature/task-search` | Task search (PR #7, closes #1) |
| `docs/final-readme` | Final project documentation (PR #8) |

## Git Commands Demonstrated

`git init`, `git status`, `git add`, `git commit`, `git log`, `git branch`, `git switch`, `git diff`, `git diff --staged`, `git clone`, `git remote -v`, `git push`, `git fetch`, `git pull`, `git merge`, `git stash`, `git restore`, `git reset --soft`, `git revert`, `git show`, `git blame`, `git tag`

## GitHub Features Demonstrated

- Public repository
- Issues (#1, #2, #3) with description, expected behavior and acceptance criteria
- Pull Requests with descriptions and testing notes
- Code review with line comments
- Linking PRs to issues with `Closes #n`
- Merging Pull Requests
- Tag `v1.0.0` and a GitHub Release
- GitHub Pages for the live demo

## How to Run

1. Clone the repository:
   ```
   git clone https://github.com/hafizshahidrahimshah/student-task-manager.git
   ```
2. Open the folder and double-click `index.html`, or open the live demo link above.
3. No installation or server is needed.

## Screenshots

Screenshots of every step (terminal output, GitHub pages and the running app) are included in the Word report submitted on Google Classroom.

## Version History

| Version | Date | Notes |
|---------|------|-------|
| v1.0.0 | October 2026 | First stable release: add, complete, delete and search tasks |

## Contributors

- Hafiz Shahid Rahim Shah (BCSF23M555) - [@hafizshahidrahimshah](https://github.com/hafizshahidrahimshah)
