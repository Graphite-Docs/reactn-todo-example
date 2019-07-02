import { setGlobal, getGlobal } from 'reactn';

//Create new todos
export class Todo {
    constructor(id, todo, status) {
        this.id = id;
        this.todo = todo;
        this.status = status;
    }
}

export function todoFilter(filterBy) {
    setGlobal({ filterBy });
    let todos = getGlobal().todos;
    if(filterBy === "all") {
        setGlobal({ filteredTodos: todos})
    } else if(filterBy === 'active') {
        const activeTodos = todos.filter(todo => todo.status === 'active');
        setGlobal({ filteredTodos: activeTodos });
    } else if(filterBy === 'complete') {
        const completedTodos = todos.filter(todo => todo.status === 'complete');
        setGlobal({ filteredTodos: completedTodos });
    }
}

export function addTodo(e) {
    e.preventDefault();
    let todos = getGlobal().todos;
    const filterBy = getGlobal().filterBy;
    let todoField = document.getElementById('todo-input');
    let newTodo = new Todo(Date.now(), todoField.value, 'active');
    todos.push(newTodo);
    let filteredTodos = filterBy !== "all" ? todos.filter(todo => todo.status === filterBy) : todos;
    document.getElementById('todo-input').value = "";
    setGlobal({ todos, filteredTodos });
}

export function toggleCompleteness(id) {
    let todos = getGlobal().todos;
    let filterBy = getGlobal().filterBy;
    let thisTodo = todos.filter(todo => todo.id === id)[0];
    thisTodo.status === "active" ? thisTodo.status = 'complete' : thisTodo.status = 'active';
    let filteredTodos = filterBy !== "all" ? todos.filter(todo => todo.status === filterBy) : todos;
    setGlobal({ todos, filteredTodos });
}