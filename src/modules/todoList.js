const todoList = (() => {
    const list = ["teste"];

    const getList = () => {
        return list;
    }

    const addItem = (item) => {
        list.push(item);
    }

    return {
        getList,
        addItem
    }
})();

const todoListController = (() => {
    const ul = document.createElement('ul');
    ul.classList.add('todo-list');

    const renderTodoList = () => {
        const li = document.createElement('li');
        li.classList.add('todo')
        todoList.getList().forEach((element, index) => {
            li.innerHTML = index + 1 + " - " + element;
            ul.appendChild(li);
        })
        console.log(todoList.getList())
        return ul;
    }

    const addTodo = (element) => {
        todoList.addItem(element);
        clearTextArea();
        return renderTodoList();
    }

    const removeTodo = (i) => {
        const index = i;
        todoList.getList().splice(index, 1);
        clearTextArea();
        return renderTodoList();
    }

    const formatTodo = (string) => {
        const command = string[0];
        todoList.getCommands().find(value => {
            return command == todoList.getCommands();
        })
    }

    const verifyInput = (element) => {
        const list = element.value.trim().split(" ");
        const command = list[0].toLowerCase();
        const todo = list[1];
        if (command == "create") {
            addTodo(todo);
            console.log("meuzovo")
        } else if (command == "delete") {
            const ul = document.querySelector('.todo-list');
            // const li = document.querySelector('.todo');
            // ul.removeChild(li);
            removeTodo(parseInt(todo) - 1);
            ul.removeChild(ul.childNodes[parseInt(todo) - 1]);
            console.log(ul)
        } else {
            clearTextArea();
            return false;
        }

    }

    const clearTextArea = () => {
        document.querySelector('textarea').value = "";
    }

    return {
        addTodo,
        renderTodoList,
        verifyInput
    }
})();


export {
    todoListController
};