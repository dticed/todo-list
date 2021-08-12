//import typeWriter from "./typeWriter";
//import todoList from "./todoListController";

const todoList = (() => {
    const commands = ["create", "delete"];
    const list = ["sadfsa", "Lucas", "sfasdf"];

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

// const Todo = (text) => {
//     this.text = text;

//     const getText = () => {
//         return text;
//     }

//     return { getText };
// }

// Função para adicionar todo no array
function addTodo(element) {
    console.log(element)
    console.log(element.value)
    todoList.addItem(element.value);
    element.value = "";
    console.log(todoList.getList())
    updateTodoList();
}

function updateTodoList() {
    const ul = document.createElement('ul');
    todoList.getList().forEach(element => {
        const li = document.createElement('li');
        li.innerHTML = element;
        ul.appendChild(li);
    });
    return ul;
}

function createConsole() {
    const console = document.createElement('div');
    console.classList.add('console');

    console.appendChild(createInputConsole());
    console.appendChild(createOutputConsole());

    return console;
}

function createInputConsole() {
    const inputConsole = document.createElement('div');
    inputConsole.classList.add('input-console');

    const inputTextConsole = document.createElement('div');
    inputTextConsole.classList.add('input-area');

    inputConsole.appendChild(createParagraph("> wake up, user"));
    inputTextConsole.appendChild(createParagraph("user@todolist:~$ "));
    inputTextConsole.appendChild(createTextArea());
    inputConsole.append(inputTextConsole);

    return inputConsole;
}

function createTextArea() {
    const textArea = document.createElement('textarea');
    textArea.cols = 30;
    textArea.rows = 1;
    textArea.wrap = 'off';

    textArea.addEventListener('keypress', (e) => {
        if (e.key == "Enter") {
            addTodo(textArea)
        }
    });

    return textArea;
}

function createOutputConsole() {
    const outputConsole = document.createElement('div');

    outputConsole.classList.add('output-console');
    outputConsole.appendChild(updateTodoList());

    return outputConsole;
}

function createParagraph(text) {
    const p = document.createElement('p');
    p.textContent = text;

    return p;
}

function loadConsoleElements() {
    const body = document.querySelector('body');
    body.appendChild(createConsole());

    updateTodoList();
}

export default loadConsoleElements;