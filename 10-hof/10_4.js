const power = pow => num => num ** pow;


console.log(power(5)(4));

function a(num, b) {
    return b(num);
}
console.log(a(1, (n) => n + 5));