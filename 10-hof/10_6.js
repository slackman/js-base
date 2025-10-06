// function fn() {
// 	return x => x;
// };

// console.log(fn());

function makeCounter() {
  let count = 0;                // переменная из внешней области

  return function () {          // внутренняя функция образует замыкание
    count += 1;                 
    return count;
  };
}

const counter = makeCounter();

// console.log(counter()); // 1
// console.log(counter()); // 2
// console.log(counter()); // 3


function power(a, b) {
	return function () {
		return a ** b;
	}
}

power(2, 3);

function createPower(degree) {
    return function (num) {
        return Math.pow(num, degree);
    };
}
const square = createPower(2);
console.log(square(4));