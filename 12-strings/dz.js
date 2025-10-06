/* Написать функцию проверки номера карты алгоритмом Луна.
	В функцию передаётся карта: 4561-2612-1234-5464, 
	а функция возвращает true, если карта проходит алгоритм и false, если нет.
*/

const card = "4561-2612-1234-5464";

function luna(card) {
    card = card.trim().replaceAll("-", "");
    newCard = "";
    for (i in card) {
        if (i % 2 === 0) {
            let newEl = card[i] * 2;
            if (newEl > 9) {
                newEl -= 9;
            }
            newCard += newEl;
        } else {
            newCard += card[i];
        }
    }
	
    let chars = [...newCard];
	const charsSum = chars.reduce((agg, el) => agg + Number(el), 0);

	return charsSum % 10 === 0 ? true : false;
}

console.log(luna(card));
