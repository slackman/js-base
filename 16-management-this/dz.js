const newTask = {
    tasks: [
        {
            id: 1,
            name: 'тест',
            description: 'описание',
            order: 0,
        },
    ],
};

const toDoList = {
    tasks: [
        { name: 'Помыть посуду', id: 1, order: 1 },
        { name: 'Сделать задачу', id: 4, order: 2 },
    ],
    addTask: function (name, order) {
        const lastId = this.tasks.reduce(
            (maxId, item) => (item.id > maxId ? item.id : maxId),
            0
        );
        this.tasks.push({ name, order, id: lastId + 1 });
    },
    deleteTask: function (idToDelete) {
        this.tasks = this.tasks.filter((task) => task.id !== idToDelete);
    },
    updateName: function (name, order, id) {
        let task = this.tasks.find((el) => el.id === id);
        if (task) {
            task.name = name;
            task.order = order;
        }
    },
    sortTasksByPriority: function () {
        this.tasks.sort((a, b) => a.order - b.order);
    },
};

// const addTaskNewObj = toDoList.addTask.bind(newTask);
const methods = ['addTask', 'deleteTask', 'updateName', 'sortTasksByPriority'];
methods.forEach((method) => {
    newTask[method] = toDoList[method].bind(newTask);
});
newTask.addTask('тест2', 3);
let lastTask = newTask.tasks[newTask.tasks.length - 1];
lastTask.description = 'описание2';

newTask.addTask('тест5', 5);
lastTask = newTask.tasks[newTask.tasks.length - 1];
lastTask.description = 'описание5';

newTask.addTask('тест3', 1);
lastTask = newTask.tasks[newTask.tasks.length - 1];
lastTask.description = 'описание3';

newTask.deleteTask(3);

newTask.updateName('newName', 1, 3);
newTask.sortTasksByPriority();

console.log(newTask);
