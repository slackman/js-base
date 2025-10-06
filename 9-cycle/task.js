const operations = [1000, -700, 300, -500, 10000];
const startingBalance = 100;

function getBalance(arrayOfOperations, initialBalance) {
    let balance = initialBalance;
    for (const operation of arrayOfOperations) {
        balance += operation;
    }
    return balance;
}

function checkOperations(arrayOfOperations, initialBalance) {
    let balance = initialBalance;
    let isOk = true;
    for (const operation of arrayOfOperations) {
        balance += operation;
        if (balance < 0) {
            isOk = false;
            break;
        }
    }
    return balance;
};


const average = (arr) => {
    let total = 0;
    for (const value of arr) total += value;
    return total / arr.length;
};


function averageOperations(arrayOfOperations) {
    const [averageRevenueArr, averageRateArr] = [[], []];

    for (const operation of arrayOfOperations) {
        if (operation > 0) {
            averageRevenueArr.push(operation);
        } else {
            averageRateArr.push(operation);
        }
    }

    return [average(averageRevenueArr), average(averageRateArr)];
};

console.log(getBalance(operations, startingBalance));
console.log(averageOperations(operations));