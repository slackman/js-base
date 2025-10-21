'use strict';
// Работа со стилями и классами

function submitForm() {
    const input = document.querySelector('.input').value;
    if (!input) {
        return;
    }
    document.querySelector('.panel').innerText = input;
    document.querySelector('.input').value = '';
    console.log(document.querySelector('.notification').getAttribute('class'));
    // перезаписывает целиком те атрибуты которые были до этого
    // так не рекомендуется делать, а лучше использовать classList
    document.querySelector('.notification').setAttribute('class', 'notification');
    document.querySelector('.notification').setAttribute('class', 'notification');
    // создание своего атрибута
    document.querySelector('.notification').setAttribute('key', 1);
    document.querySelector('.notification').setAttribute('user-id', 1);
    // получение атрибута
    console.log(Number(document.querySelector('.notification').getAttribute('user-id')));
}

function inputChanged(e) {
    if (e.code === 'Enter') {
        submitForm();
    }
}
