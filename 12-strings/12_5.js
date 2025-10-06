const userFullName = "Вася Пупкин Васильевич";
console.log(userFullName.split(" "));
const [firstName, familyName, lastName] = userFullName.split(" ");
console.log(familyName, familyName, lastName);
const arr = ['Ты', 'знаешь', 'JS']
console.log(arr.join(' '))