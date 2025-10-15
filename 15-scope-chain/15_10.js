/*
	дополнить объект методами для получения имени:
	- компании
	- сео
	- сотрудника
*/

const company = {
    name: 'ООО Агро',
    emoloyees: [
        {
            name: 'Света',
            getName: function () {
                return this.name;
            },
        },
    ],
    ceo: {
        name: 'Вася',
        getName: function () {
            return this.name;
        },
    },
    getName: function () {
        return this.name;
    },
};

console.log(company.getName());
console.log(company.ceo.getName());
console.log(company.emoloyees.map(employee => employee.getName()));
