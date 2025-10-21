'use strict';
// Local storage
localStorage.setItem('token', 'asdasdasdafdgsdg');
localStorage.setItem('token1', 1);
localStorage.setItem('token1', true);

const token1 = localStorage.getItem('token1');
console.log(typeof token1); // true - это строка!

localStorage.removeItem('token1');
localStorage.clear();