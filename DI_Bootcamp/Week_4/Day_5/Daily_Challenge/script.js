const tasks = [];

document.getElementById('taskForm').addEventListener('submit', function(event) {
    event.preventDefault();
    addTask();
});

function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskText = taskInput.value.trim();

    if (taskText === '') {
        alert('Please enter a task.');
        return;
    }

    const taskId = tasks.length;
    const task = {
        task_id: taskId,
        text: taskText,
        done: false
    };

    tasks.push(task);
    renderTask(task);
    taskInput.value = '';
}

function renderTask(task) {
    const taskList = document.querySelector('.listTasks');
    const taskItem = document.createElement('div');
    taskItem.className = 'task';
    taskItem.setAttribute('data-task-id', task.task_id);

    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.addEventListener('change', function() {
        doneTask(task.task_id);
    });

    const taskLabel = document.createElement('label');
    taskLabel.textContent = task.text;

    const deleteButton = document.createElement('i');
    deleteButton.className = 'fas fa-times delete';
    deleteButton.addEventListener('click', function() {
        deleteTask(task.task_id);
    });

    taskItem.appendChild(checkbox);
    taskItem.appendChild(taskLabel);
    taskItem.appendChild(deleteButton);
    taskList.appendChild(taskItem);
}

function doneTask(taskId) {
    const task = tasks.find(t => t.task_id === taskId);
    task.done = !task.done;

    const taskItem = document.querySelector(`[data-task-id="${taskId}"]`);
    const taskLabel = taskItem.querySelector('label');
    taskLabel.style.textDecoration = task.done ? 'line-through' : 'none';
    taskLabel.style.color = task.done ? 'red' : 'black';
}

function deleteTask(taskId) {
    const taskIndex = tasks.findIndex(t => t.task_id === taskId);
    tasks.splice(taskIndex, 1);

    const taskItem = document.querySelector(`[data-task-id="${taskId}"]`);
    taskItem.remove();
}
