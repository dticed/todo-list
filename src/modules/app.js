import loadHeaderElements from "./headerElements"; 
import loadConsoleElements from "./consolelElements";
import loadFooterElements from "./footerElements";

function loadApp(){
    loadHeaderElements();
    loadConsoleElements();
    loadFooterElements();
}

export default loadApp;

//import typeWriter from "./typeWriter";
//import todoList from "./todoListController";

const todoList = (() => {
    const commands = ["create", "delete"];
    const list = [];

    const getCommands = () => {
        commands.forEach(command => {
            return command;
        })
    }

    const getList = () => {
        return list;
    }

    const addItem = (item) => {
        list.push(item);
    }

    return {
        getCommands,
        getList,
        addItem
    }
})();

function addTodo(element) {
    console.log(element)
    console.log(element.value)
    todoList.addItem(element.value);
    element.value = "";
    console.log(todoList.getList())
}

// function updateTodoList() {
//     const li = document.createElement('li');
//     todoList.getList().forEach(element => {
        
//         li.innerHTML = element;

//     });
//     return li;
// }

function createConsole() {
    const console = document.createElement('div');
    console.classList.add('console');

    console.appendChild(createInputConsole());
    console.appendChild(createOutputConsole());

    return console;
}


function loadConsoleElements() {
    const body = document.querySelector('body');
    body.appendChild(createConsole());
}

export default loadConsoleElements;