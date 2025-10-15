/*
	Написать объект ToDoList, который хранит в себе задачи { ‘title’: ‘Помыть посуду’, id: 1, priority: 1 } и имеет методы:

    - Добавить задачу
    - Удалить задачу по id
    - Обновить имя или приоритет по Id
    - Отсортировать задачи по приоритету
*/

const toDoList = {
    tasks: [
        { title: 'Помыть посуду', id: 1, priority: 1 },
        { title: 'Сделать задачу', id: 4, priority: 2 },
    ],
    addTask: function (title, priority) {
        const lastId = this.tasks.reduce(
            (maxId, item) => (item.id > maxId ? item.id : maxId),
            0
        );
        this.tasks.push({ title, priority, id: lastId + 1 });
    },
    deleteTask: function (idToDelete) {
        this.tasks = this.tasks.filter((task) => task.id !== idToDelete);
    },
    updateName: function (title, priority, id) {
        let task = this.tasks.find((el) => el.id === id);
        if (task) {
            task.title = title;
            task.priority = priority;
        }
    },
    sortTasksByPriority: function () {
        this.tasks.sort((a, b) => a.priority - b.priority);
    },
};

toDoList.addTask('Попить воды', 1);
toDoList.deleteTask(1);
toDoList.updateName('Поесть', 5, 4);
toDoList.sortTasksByPriority();

console.log(toDoList.tasks);
