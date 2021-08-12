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

function createParagraph(text) {
    const p = document.createElement('p');
    p.textContent = text;

    return p;
}