const datesStr = [
    "10-02-2022",
    "тест",
    "11/12/2023",
    "00/13/2022",
    "41/12/2023",
];

function checkDates(datesStr) {
    const datesStrCopy = datesStr;
    correctDelimeters = ["-", "/"];
    let dateParts = datesStrCopy.map((elDate) => elDate.split(/[-/]/));
    dateParts = dateParts.filter((el) => el.length === 3);

    const datesStrAfterFormat = [];
    for (el of dateParts) {
        if (
            Number(el[0]) > 0 &&
            Number(el[0]) <= 31 &&
            Number(el[1]) > 0 &&
            Number(el[1]) <= 12
        ) {
            datesStrAfterFormat.push(el.join("-"));
        }
    }

    return datesStrAfterFormat;
}

console.log(checkDates(datesStr));
