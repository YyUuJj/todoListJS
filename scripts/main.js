const addBtn = document.querySelector('#task_button');

console.log(addBtn);


addBtn.addEventListener('click', (event) => {
    // console.log(document.querySelector("#task").value);
    const task = document.querySelector("#task").value;
    if (task == "") {
        showErrorMessage('Не введен текст');
    } else {
        addTask(task);
        clearInput(task);
    }
})

function addTask(task) {
    clearMessages();
    const taskBlock = document.querySelector('.todoList');
    const newTaskItem = document.createElement('div');
    const newTaskText = document.createElement('p');
    const deleteButton = document.createElement('input');
    const completeButton = document.createElement('input');
    deleteButton.type = 'button';
    deleteButton.value = "Удалить";
    deleteButton.classList.add('deleteButton');
    deleteButton.addEventListener('click', deleteTask);

    completeButton.type = 'button';
    completeButton.value = "Выполнить";
    completeButton.classList.add('completeButton');
    completeButton.addEventListener('click', completeTask);

    newTaskItem.appendChild(newTaskText);
    newTaskText.innerHTML = `task: ${task}`;

    taskBlock.appendChild(newTaskItem);
    newTaskItem.appendChild(completeButton);
    newTaskItem.appendChild(deleteButton);
    newTaskItem.classList.add('todo__item');
    completeMessages('Задача добавлена');
}

function completeTask(event) {
    event.target.parentElement.classList.add("taskComplete");
    removeButtonsTask(event);
}

function removeButtonsTask(event) {
    console.log(event);
}

function deleteTask(event) {
    console.log(event.target.parentElement);
    event.target.parentElement.remove();
}

function clearMessages() {
    const lastChild = document.querySelector('p');
    const messages = document.querySelector(".messages");
    // console.log(messages.childNodes);
    if(messages.childNodes.length>1) {
        messages.removeChild(lastChild);
    }
}

function completeMessages(complete) {
    const messages = document.querySelector(".messages");
    const newComplete = document.createElement('p');
    newComplete.classList.add('complete');
    newComplete.innerHTML = `Поздравляем: ${complete}`;
    messages.appendChild(newComplete);
}


function showErrorMessage(error) {
    clearMessages();
    const messages = document.querySelector(".messages");
    // messages.removeChild(lastChild);
    const newError = document.createElement('p');
    newError.innerHTML = `Error: ${error}`;
    newError.classList.add('error');
    messages.appendChild(newError);
    
}

function clearInput () {
    document.querySelector("#task").value = null;
}