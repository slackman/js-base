'use strict';
console.log(name);

const user = {
    firstName: 'Вася',
    lastName: 'Пупкин',
    age: 20,
    getUserInfo: function () {
        console.log(this);
        console.log(`${this.firstName} ${this.lastName}`);

        const canDrink = () => {
            if (this.age >= 18) {
                console.log('Может уже пить!');
            } else {
                console.log('Не может пить!');
            }
        };
        canDrink();
    },
    getUserInfoArrow: () => {
        // this у стрелочной функции нет и значение берётся из лексического окружения глобального контекста
        console.log(this);
        console.log(`${this.firstName} ${this.lastName}`);
    },
};

user.getUserInfo();
user.getUserInfoArrow();

//обычные функции получают своё this при вызове, а стрелочные — берут this
// из лексического контекста, в котором объявлены.
