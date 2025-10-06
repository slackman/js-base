/*
	Написать функцию, которая возвращает true,
	если элемент есть, и false, если нет.
*/

const arr = [2, 4, 4, 10, 20];

function some(array, element) {
	const res = array.filter(el => el === element);
	return res[0] == undefined ? false : true;
}

// console.log(some(arr, 2));

console.log(arr.some(el => el === 1));