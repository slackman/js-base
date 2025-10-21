'use strict';
/*
    Создайте объект пользователя с паролем.
    С помощью функции ниже удалить пароль сделав
    функцию сброса пароля
*/

const user = {
    login: 'a@a.ru',
    password: '123'
}

function removePassword(reset) {
    if (reset) {
        this.password = undefined;
    } else {
        this.password = 1;
    }
}


const resetUserPassword = removePassword.bind(user, true);
resetUserPassword();
console.log(user);

// если разово, то можно просто использовать call
removePassword.call(user, true);
console.log(user);