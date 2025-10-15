// деструктуризация объекта

const user = {
    name: 'Вася',
    age: '40',
    city: 'Moscow',
};

const { age, ...userWithoutAge } = user;
console.log(age);
console.log(userWithoutAge);

const additionalData = {
    skills: ['Разработка', 'Дизайн'],
    creditCard: '2342-2345-2734-2356',
};

// user.skills = additionalData.skills;
// user.creditCard = additionalData.creditCard;
// console.log(user);

// спред оператор
// user = {
// 	...user,
// 	...additionalData
// }

user.test = 'sdfs'; // несмотря на константу элементы внутри можно изменять, а спред оператор выполнился бы с ошибкой
console.log(user);
