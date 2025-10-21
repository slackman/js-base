'use strict';
// Работа со стилями и классами

function submitForm() {
    const input = document.querySelector('.input').value;
    if (!input) {
        return;
    }
    document.querySelector('.panel').innerText = input;
    document.querySelector('.input').value = '';
    // вариант изменения стиля, но обычно так не делают а меняют через классы
    // document.querySelector('.notification').style.display = 'block';
    // обычно делают иак через классы
    // document.querySelector('.notification').classList.add('notification_active');
    document.querySelector('.notification').classList.remove('notification_hidden');
    console.log();
}

function inputChanged(e) {
    if (e.code === 'Enter') {
        submitForm();
    }
}
