const todoList = (() => {
    const commands = ["create", "delete"];
    const list = ["sidhfsd", "iasohiohiheia"];

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

    return {getCommands, getList, addItem}
})();

export default todoList;