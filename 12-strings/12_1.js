const userName = 'Вася Пупкина';
console.log(userName);
console.log(userName[0]);
console.log(userName[1]);
console.log(userName.charAt(2));

console.log(userName.length);

console.log(userName.indexOf('а'));
console.log(userName.lastIndexOf('а'));
console.log(userName.lastIndexOf("уп"));
console.log(userName.includes('а'));
console.log(userName.includes("упd"));

console.log(userName.slice(5));
console.log(userName.slice(5, 8)); // не включая 8