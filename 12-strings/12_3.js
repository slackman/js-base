const str = 'Вася Пупкин';
console.log(str.includes('а'));
console.log(str.startsWith('Вася'));
console.log(str.endsWith('н'));
console.log(new String('Вася Пупкин').includes('а'));

console.log(str.toLocaleLowerCase());
console.log(str.toUpperCase());
console.log(str.replace('В', 'Ф')); // результат новая строка
console.log(str.replace("П", "Д"));
console.log(str.replaceAll("а", "и"));
console.log(str.replace(/a/g, 'и'));

const str2 = ' Вася Пупкина   \n';
console.log(str2.trim())
