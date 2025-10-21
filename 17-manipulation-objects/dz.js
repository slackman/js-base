'use strict';

function submitForm(operation) {
    const input1 = Number(document.querySelector('[id="1"]').value);
    const input2 = Number(document.querySelector('[id="2"]').value);

    const resultBox = document.querySelector('.text');
    let result;
    console.log(operation);
    if (operation === 'add') {
        result = input1 + input2;
    } else if (operation === 'div') {
        result = input1 / input2;
    } else if (operation === 'sub') {
        result = input1 - input2;
    } else {
        result = input1 * input2;
    }

    resultBox.textContent = result;
}
