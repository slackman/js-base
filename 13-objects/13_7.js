// Итерирование по объекту
const cities = {
    msk: {
        lt: 200,
        temp: 25,
    },

    spb: {
        lt: 100,
        temp: 20,
    },
};

let sumTemp = 0;
console.log(Object.keys(cities));
let citiesCount = Object.keys(cities).length;

// for (const key in cities) {
//     console.log(key);
//     citiesCount++;
//     sumTemp += cities[key].temp;
// }

// console.log(sumTemp / citiesCount);

for (const key of Object.keys(cities)) {
    sumTemp += cities[key].temp;
}

console.log(sumTemp / citiesCount);
