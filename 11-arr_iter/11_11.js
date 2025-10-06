// Быстрое создание массивов
const arr = [1, 2, 3, 4, 5];

console.log(new Array(1, 2, 3, 4, 5));
const arr2 = new Array(5);
console.log(arr2);
arr2.fill(2, 0, 3);
console.log(arr2);
console.log(`=============================`)
const arr3 = Array.from({ length: 5 }, (cur, i) => i + 1);
console.log(arr3);