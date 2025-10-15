// optional chaining
const cities = {
	msk: {
		temp: {
			celcius: 25
		}
	},
	spb: {

	}
}


const city = 'spb';
if (cities[city] !== undefined && cities[city].temp != undefined) {
	console.log(cities[city].temp.celcius)
}

// в случае если нет ключа вернётся undefined
console.log(cities[city]?.temp?.celcius);