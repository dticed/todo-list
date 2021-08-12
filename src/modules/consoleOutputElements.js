function createOutputConsole() {
    const outputConsole = document.createElement('div');
    const ul = document.createElement('ul');
    outputConsole.classList.add('output-console');
    outputConsole.appendChild(ul);
    
    todoList.getList().forEach(element => {
        const li = document.createElement('li');
        li.innerHTML = element;
        ul.appendChild(li);
    })
    
    return outputConsole;
}