const user = {
    name: 'Вася',
    surname: 'Пупкин',
    age: 24,
    getFullName: function () {
		console.log(this); // this - это сам объект
        return this.name + ' ' + this.surname;
    },
};


console.log(user.getFullName());
