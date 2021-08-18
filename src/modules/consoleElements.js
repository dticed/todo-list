import {
    text
} from 'cheerio/lib/api/manipulation';
import {
    todoListController
} from './todoList';

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
    let textArea = document.createElement('textarea');
    textArea.cols = 30;
    textArea.rows = 1;
    textArea.wrap = 'off';

    textArea.addEventListener('keypress', (e) => {
        if (e.key == "Enter") {
            if (todoListController.verifyInput(textArea)) {
                const list = todoListController.addTodo(textArea);
                const outputConsole = document.querySelector('.output-console');
                outputConsole.appendChild(list);
            } else {
                const inputConsole = document.querySelector('.input-console');
                const span = document.createElement('span');
                span.textContent = "command not found"
                inputConsole.appendChild(span)
            }
        }
    });

    return textArea;
}

function createParagraph(text) {
    const p = document.createElement('p');
    p.textContent = text;

    return p;
}

function createOutputConsole() {
    const outputConsole = document.createElement('div');
    outputConsole.classList.add('output-console');
    outputConsole.appendChild(todoListController.renderTodoList());

    return outputConsole;
}

function loadConsoleElements() {
    return createConsole();
}

export default loadConsoleElements;