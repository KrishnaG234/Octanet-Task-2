// script.js
document.addEventListener('DOMContentLoaded', () => {
    const taskForm = document.getElementById('task-form');
    const taskInput = document.getElementById('task-input');
    const taskDeadline = document.getElementById('task-deadline');
    const taskPriority = document.getElementById('task-priority');
    const taskLabel = document.getElementById('task-label');
    const taskList = document.getElementById('task-list');

    taskForm.addEventListener('submit', (e) => {
        e.preventDefault();

        // Create task item
        const taskItem = document.createElement('li');
        const taskDetails = document.createElement('div');
        taskDetails.classList.add('task-details');
        const taskText = document.createElement('span');
        taskText.textContent = taskInput.value;
        const taskMeta = document.createElement('span');
        taskMeta.classList.add('task-label');
        taskMeta.textContent = `Deadline: ${taskDeadline.value} | Priority: ${taskPriority.value} | Label: ${taskLabel.value}`;
        taskDetails.appendChild(taskText);
        taskDetails.appendChild(taskMeta);

        // Create complete button
        const completeButton = document.createElement('button');
        completeButton.textContent = 'Complete';
        completeButton.classList.add('complete');
        completeButton.addEventListener('click', () => {
            taskItem.classList.toggle('completed');
        });

        // Create delete button
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.classList.add('delete');
        deleteButton.addEventListener('click', () => {
            taskList.removeChild(taskItem);
        });

        taskItem.appendChild(taskDetails);
        taskItem.appendChild(completeButton);
        taskItem.appendChild(deleteButton);
        taskList.appendChild(taskItem);

        // Clear input fields
        taskInput.value = '';
        taskDeadline.value = '';
        taskPriority.value = '';
        taskLabel.value = '';
    });
});
