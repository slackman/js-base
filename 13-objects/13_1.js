const userArray = ["Вася", "Пупкин", 24];
const user = {
    name: "Вася",
    surname: "Пупкин",
    age: 24,
    skills: ["Программирование", "Готовка"],
    eduBasic: "Школа 10",
    eduPro: "МФТИ",
};
console.log(user.city);
console.log(user.name);
console.log(user.skills);
console.log(user["skills"]);
const level = "Pro";
console.log(user["edu" + level]);

// const res = prompt('Введите свойство');
// console.log(user[res]);
user.city = "Москва";
user['city'] = 'Москва';
console.log(user.city);
user.age = 30;
user['age'] = 30;
console.log(user)