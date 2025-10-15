/*
	Сделать объект склад с методами добавления на склад,
	поиска по складу товара и расчёт веса
*/
const warehouse = {
    goods: [],
    findGoodById: function (id) {
        return this.goods.find((el) => el.id === id);
    },
    addGood: function (good) {
        this.goods.push(good);
    },
    getWeightKg: function () {
        // веса может не быть
        return this.goods.reduce((sum, good) => {
            const weight = good.weight?.kg ?? 0;
            return sum + weight;
        }, 0);
    },
};

/* товары */
const car = {
    id: 1,
    weight: {
        kg: 1000,
    },
    brand: 'Ford',
};

const chair = {
    id: 1,
    weight: {
        kg: 2,
    },
};

const paper = {
    id: 3,
    color: 'red',
};

warehouse.addGood(car);
warehouse.addGood(chair);
warehouse.addGood(paper);
console.log(warehouse.goods);
console.log(warehouse.findGoodById(1));
console.log(warehouse.getWeightKg());
