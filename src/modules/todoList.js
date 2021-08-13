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
    // const ul = document.getElementsByClassName('todo-list');

    // const getUl = () => {
    //     return ul;
    // }

    // for(let i = 0; i < todoList.getList().length; i++) {
    //     console.log(getUl())
    // }

    // todoList.getList().forEach(element => {
    //     const li = document.createElement('li');
    //     li.innerHTML = element;
    //     console.log(li)
    // })
    
    const renderTodoList = () => {
        const ul = document.createElement('ul');
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
        renderTodoList, addTodo
    }
})();


export {
    todoListController
};
