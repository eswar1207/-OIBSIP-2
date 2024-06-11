function addTask() {
    const taskInput = document.getElementById('new-task');
    const taskText = taskInput.value.trim();
    if (taskText) {
        const taskItem = createTaskElement(taskText);
        document.getElementById('pending-list').appendChild(taskItem);
        taskInput.value = '';
    }
}

function createTaskElement(taskText) {
    const li = document.createElement('li');
    li.textContent = taskText;

    const editButton = document.createElement('button');
    editButton.textContent = 'Edit';
    editButton.classList.add('edit');
    editButton.onclick = () => editTask(li);

    const completeButton = document.createElement('button');
    completeButton.textContent = 'Complete';
    completeButton.classList.add('complete');
    completeButton.onclick = () => completeTask(li);

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.classList.add('delete');
    deleteButton.onclick = () => deleteTask(li);

    li.appendChild(editButton);
    li.appendChild(completeButton);
    li.appendChild(deleteButton);

    return li;
}

function editTask(taskItem) {
    const newText = prompt('Edit your task:', taskItem.firstChild.textContent);
    if (newText) {
        taskItem.firstChild.textContent = newText;
    }
}

function completeTask(taskItem) {
    taskItem.classList.add('completed');
    taskItem.querySelector('.complete').remove();
    document.getElementById('completed-list').appendChild(taskItem);
}

function deleteTask(taskItem) {
    taskItem.remove();
}
