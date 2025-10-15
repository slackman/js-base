/*	Написать функцию, которая принимает объект query параметров и возвращает строку для вставки:
	{
		search: ‘Вася’,
		take: 10,
	}
	search=Вася&take=10
*/

const queryParams = {
    search: 'Вася',
    take: 10,
};

function getQueryParams(queryParams) {
    let searchString = '';
    for (const key in queryParams) {
        if (searchString != '') {
            searchString += '&';
        }
        searchString += `${key}=${queryParams[key]}`;
    }

    return searchString;
}

console.log(getQueryParams(queryParams));
