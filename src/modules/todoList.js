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
        todoList.getList().forEach((element, index) => {
            li.innerHTML = index + 1 + " - " + element;
            ul.appendChild(li);
        })
        return ul;
    }

    const addTodo = (element) => {
        const list = element.value.trim().split(" ");
        const command = list[0].toLowerCase();
        const todo = list[1];
        if(command == "create") {
            todoList.addItem(todo);
        }
        
        clearTextArea();
        return renderTodoList();
    }

    const removeTodo = (element) => {
        const string = element.value.split(" ");
        const command = string[0].toLowerCase();
        if(command == "delete") {
            todoList.addItem(string[1]);
        }
        
        return renderTodoList();
    }

    const formatTodo = (string) => {
        const command = string[0];
        todoList.getCommands().find(value => {
            return command == todoList.getCommands();
        })
    }

    const verifyInput = (element) => {
        const list = element.value.split(" ");
        const command = list[0].toLowerCase();
        const todo = list[1];
        if (command != "create" && command != "delete") {
            
            return false;
        }
        return true;
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