// верные

const num1 = "89103235356";
const num2 = "+79103235356";
const num3 = "+7(910)3235356";
const num4 = "+7(910) 323-53-56";
const num5 = " +7(910) 323-53-56  ";

// не верные
const num1Error = "89103235";
const num2Error = "+7d910d323-53-56";
const num3Error = "9+7103235356";
const num4Error = "86103g35356";

function validatePhone(phone) {
    phone = phone.trim();
    phone = phone.replace("+7", "8");

    for (const ch of ["(", ")", " ", "-"]) {
        phone = phone.replaceAll(ch, "");
    }

    // console.log(phone);
    if (phone.length === 11) {
        if (phone[0] !== 8 && phone[1] !== "9") {
            return false;
        }

        for (const el in phone) {
            if (isNaN(Number(phone[el]))) {
                return false;
            }
        }
    } else {
        return false;
    }
    return true;
}

console.log(validatePhone(num1));
console.log(validatePhone(num2));
console.log(validatePhone(num3));
console.log(validatePhone(num4));
console.log(validatePhone(num5));

console.log(validatePhone(num1Error));
console.log(validatePhone(num2Error));
console.log(validatePhone(num3Error));
console.log(validatePhone(num4Error));
