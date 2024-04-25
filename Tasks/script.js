document.addEventListener('DOMContentLoaded', function () {
    loadTasks();
});

function loadTasks() {
    const taskList = document.getElementById('taskList');
    taskList.innerHTML = '';
    const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    tasks.forEach(function (task, index) {
        const li = document.createElement('li');
        li.innerHTML = `${task} <button class="delete-btn" onclick="deleteTask(${index})">Delete</button>`;
        taskList.appendChild(li);
    });
}

function addTask() {
    const taskInput = document.getElementById('taskInput');
    const task = taskInput.value.trim();
    if (task !== '') {
        const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
        tasks.push(task);
        localStorage.setItem('tasks', JSON.stringify(tasks));
        taskInput.value = '';
        loadTasks();
    }
}

function deleteTask(index) {
    const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    tasks.splice(index, 1);
    localStorage.setItem('tasks', JSON.stringify(tasks));
    loadTasks();
}
