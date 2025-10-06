// Получить имя и фамилию из строки
const fullUserName = 'Вася aka Terminator Perdinator Пупкин';

const userName = fullUserName.slice(0, fullUserName.indexOf(' '));
const userSurname = fullUserName.slice(fullUserName.lastIndexOf(' ') + 1, fullUserName.length);