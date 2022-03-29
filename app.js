'use strict';

const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');

todoButton.addEventListener('click', addTodo);
todoList.addEventListener('click', check);
$(todoList).click(remove);

let lastRemoved = "";

function addTodo(event) {
    event.preventDefault();
    if (todoInput.value !== ""){

        const todo = document.createElement('div');
    
        const todoDiv = document.createElement('div');
        todoDiv.classList.add('todo');
    
        const newTodo = document.createElement('li');
        newTodo.innerText = todoInput.value;
        newTodo.classList.add('todo-item');
        todoDiv.appendChild(newTodo);
    
        const deleteButton = document.createElement('button');
        deleteButton.innerHTML = '<i class="fas fa-trash"></i>';
        deleteButton.classList.add('delete-btn');
        todoDiv.appendChild(deleteButton);
    
        todo.appendChild(todoDiv);
    
        const date = document.createElement('div');
        date.classList.add('date-hidden');
        todo.appendChild(date);
    
        todoList.appendChild(todo);
    
        todoInput.value = "";
    }
    
}

function check(event){
    const item = event.target;

    if(item.classList[0] === 'todo-item'){
        const today = new Date();
        const currentDate = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate()+' '+today.getHours()+':'+today.getMinutes()+':'+today.getSeconds();

        const todoDiv = item.parentElement;
        todoDiv.classList.toggle('checked');
        const todo = todoDiv.parentElement;
        const date = todo.getElementsByClassName('date-hidden');
        const dateNode = date[0];
        dateNode.classList.toggle('date-show');
        dateNode.innerText = currentDate.toString();
    }
}

function remove(event){
    const item = event.target;

    if($(item).attr('class') === 'delete-btn'){

        $('#modal').toggle('slow');
        $('#modal-yes').off('click').click(() => {
            $('#modal').toggle('slow');
            const todoDiv = $(item).parent();
            const todo = $(todoDiv).parent();
            lastRemoved = $(todo);
            $(todo).remove();
            
        });
        $('#modal-no').off('click').click(() => {
            $('#modal').toggle('slow');
        });
        
    }
}

$(document).keydown(function(event) {
    if(event.ctrlKey && (event.which === 90) && lastRemoved !== "") {
        $(todoList).append(lastRemoved);
        lastRemoved = "";
    }
});