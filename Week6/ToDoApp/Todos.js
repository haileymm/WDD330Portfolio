

export default class Todos {
    constructor(key, element) {
        this.key = key;
        this.element = element;
        this.addTodo = this.addTodo.bind(this);//bind to correct scope
        this.listTodos = this.listTodos.bind(this);//bind to correct scope
        }
    
    //get from localStorage and display
    listTodos() {
        getTodos();
        console.log(localStorage);
        renderTodoList(todoList, this.element);
    
    }

    //add an object to the list then save to localStorage and display the list
    addTodo(task, key) {
        task = document.getElementById('taskInput').value;
        key = this.key;
        const todo = {id: key, content: task, completed: false};
        JSON.stringify(todo);
        todoList.push(todo);
        getTodos();
        saveTodo(todoList);
        this.listTodos();
        document.getElementById('taskInput').value = '';//clear input after pushing button

    }
}

//list to load to
let todoList = [];

//filter buttons
document.getElementById('all').addEventListener('click', function() {
    let allList = todoList.filter(object => object.completed === true || false);
    renderTodoList(allList, 'ul');
})


document.getElementById('all').addEventListener('click', function() {
    let activeList = todoList.filter(object => object.completed === false);
    renderTodoList(activeList, 'ul');
})

document.getElementById('all').addEventListener('click', function() {
    let completedList = todoList.filter(object => object.completed === true)
    renderTodoList(completedList, 'ul');
})


//save list of objects to localStorage
function saveTodo(list) {
    localStorage.setItem('todoList', JSON.stringify(list));
    console.log(todoList);
    console.log(localStorage);
    //a todo should look like this: {id: timestamp, content: string, completed: bool}
}

//get list of objects from localStorage and save as list
function getTodos() {
    let tasks = JSON.parse(localStorage.getItem('todoList'));
    if (todoList.length === null) {
        todoList = tasks;
        console.log(todoList);
        return todoList;
        }
    }

//insert HTML elements according to the list
function renderTodoList(list, element) {

    let parentNode = document.querySelector('ul');
    const li = document.createElement('li');
    const label = document.createElement('label');
    const button = document.createElement('button');
    const checkbox = document.createElement('input');
    //insert task count
    document.getElementById('totalLabel').textContent = `${list.length} tasks left`;
    

    
    for (let i = 0; i < list.length; ++i) {
    
        parentNode.appendChild(li);
        li.appendChild(checkbox);
        li.appendChild(label);
        li.appendChild(button);

        button.setAttribute('type', 'button');
        checkbox.setAttribute('type', 'checkbox');
        li.setAttribute('id', 'task');
        label.setAttribute('id', 'taskItem');
        label.setAttribute('class', 'strikethrough');

        button.textContent = 'X Remove';
        button.setAttribute('id', 'removeBtn');
        

        label.textContent = list[i].content;
        //remove button
        //document.getElementById('removeBtn').addEventListener("click", function() {}, false);
        if (checkbox.checked === true) {
            list[i].complete = true;
        }
    };


    
}



export {
    todoList,
    Todos
}