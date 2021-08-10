import typeWriter from "./typeWriter";
import getInputValue from './consoleController';

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
    getInputValue(textArea);

    return textArea;
}

function createOutputConsole() {
    const outputConsole = document.createElement('div');
    outputConsole.classList.add('output-console');

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
}

export default loadConsoleElements;

