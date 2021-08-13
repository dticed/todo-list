const todoList = (() => {
    const commands = ["create", "delete"];
    const list = ["sfdasdfsadf"];

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

const todoListController = (() => {

    function renderTodoList() {
        const ul = document.querySelector('.todo-list');
        todoList.getList().forEach(element => {
            const li = document.createElement('li');
            li.innerHTML = element;
            ul.appendChild(li);
        })
        return ul;
    }

    const addTodo = (element) => {
        todoList.addItem(element.value);
        element.value = "";
        return renderTodoList();
    }

    return {
        addTodo, renderTodoList
    }
})();


export {
    todoListController
};