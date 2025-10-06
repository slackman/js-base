const operations = [100, -20, 7, -30, 50];

// let balance = 0;
// for (const operation of operations) {
// 	balance += operation;
// }

// console.log(balance);

const finalBalance = operations.reduce((acc, operation, i) => {
    console.log(`Итерация ${i}, acc: ${acc}, Операция: ${operation}`);
    return (acc += operation);
}, 0);

console.log(finalBalance);

// 0 - acc = 0, value = 100
// 1 - acc = 100, value = -20

const minElement = operations.reduce((acc, operation, i) => {
    if (operation > 0) {
        return acc;
    } else {
        return operation;
    }
}, 0);
