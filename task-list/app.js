const form = document.querySelector('#task-form')
const taskList = document.querySelector('.collection')
const clearBtn = document.querySelector('.clear-tasks')
const filter = document.querySelector('#filter')
const taskInput = document.querySelector('#task')

loadEventListeners();

function loadEventListeners() {
    document.addEventListener('DOMContentLoaded', populateTasks);
    form.addEventListener('submit', addTask);
    taskList.addEventListener('click', removeTask)
    clearBtn.addEventListener('click', removeAllTasks)

}

function populateTasks() {
    tasks = getTasks();
    tasks.forEach(function (task) {
        addTaskHtml(task)
    })
}

function addTask(e) {
    if (taskInput.value === '') {
        alert('Task cannot be blank!!');
    }

    addTaskHtml(taskInput.value)
    addTaskToLocalStorage(taskInput.value);
    taskInput.value = '';

    e.preventDefault();
}

function addTaskHtml(task) {
    const li = document.createElement('li');
    li.className = 'collection-item';
    li.appendChild(document.createTextNode(task));

    const link = document.createElement('a');
    link.className = 'delete-item secondary-content';
    link.innerHTML = '<i class="fa fa-remove delete-task"></i>';

    li.appendChild(link);
    taskList.appendChild(li);
}

function removeTask(e) {
    if (e.target.parentElement.classList.contains('delete-item')) {
        task = e.target.parentElement.parentElement.textContent;
        removeTaskFromLocalStorage(task);
        e.target.parentElement.parentElement.remove();
    }
    e.preventDefault();
}

function removeAllTasks(e) {
    taskList.remove();
    removeAllTaksFromLocalStorage();
    e.preventDefault();
}

function addTaskToLocalStorage(task) {
    let tasks = getTasks();
    tasks.push(task)
    localStorage.setItem('tasks', JSON.stringify(tasks))
}

function removeTaskFromLocalStorage(task) {
    let tasks = getTasks();
    tasks.splice(tasks.indexOf(task), 1);
    localStorage.setItem('tasks', JSON.stringify(tasks))
}

function removeAllTaksFromLocalStorage() {
    localStorage.setItem('tasks', JSON.stringify([]))
}

function getTasks() {
    let tasks;
    if (localStorage.getItem('tasks') === null) {
        tasks = [];
    }
    else {
        tasks = JSON.parse(localStorage.getItem('tasks'))
    }

    return tasks;
}