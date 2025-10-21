'use strict';
// Упражнение - сохранение JSON

// key: 'text', value: { text: 'sdfdfg'}

function submitForm() {
    const input = document.querySelector('.input').value;
    if (!input) {
        return;
    }
    document.querySelector('.panel').innerText = input;
    document.querySelector('.input').value = '';
    document.querySelector('.notification').classList.remove('notification_hidden');
    const obj = JSON.stringify({text: input});
    localStorage.setItem('text', obj);
}

function inputChanged(e) {
    if (e.code === 'Enter') {
        submitForm();
    }
}


