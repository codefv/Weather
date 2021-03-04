const weatherData = {
	tempUnit: 'C',
	windSpeedUnit: 'm/s',
	days: [
		{
			day: 'Mon',
			temp: 22,
			windDirection: 'north-east',
			windSpeed: 10,
			type: 'sunny',
		},
		{
			day: 'Tue',
			temp: 14,
			windDirection: 'north-west',
			windSpeed: 14,
			type: 'rainy',
		},
		{
			day: 'Wed',
			temp: 16,
			windDirection: 'south-east',
			windSpeed: 20,
			type: 'cloudy',
		},
		{
			day: 'Thu',
			temp: 19,
			windDirection: 'south-east',
			windSpeed: 20,
			type: 'cloudy',
		},
		{
			day: 'Fri',
			temp: 18,
			windDirection: 'south-east',
			windSpeed: 20,
			type: 'rainy',
		},
		{
			day: 'Sat',
			temp: 17,
			windDirection: 'north-east',
			windSpeed: 20,
			type: 'sunny',
		},
		{
			day: 'Sun',
			temp: 19,
			windDirection: 'south-west',
			windSpeed: 20,
			type: 'sunny',
		},
	],
};

document.addEventListener('DOMContentLoaded', () => {
	let container = document.getElementById('container');
	let tempUnit = weatherData.tempUnit;
	let windSpeedUnit = weatherData.windSpeedUnit;
	let degree = '&#176';
	let widget = document.querySelector('.section-widget');

	function renderContent(tempUnit) {
		let output = '';
		weatherData.days.map((day) => {
			let temperature = day.temp;
			if (tempUnit === 'K') temperature = day.temp + 273.15;

			output += `
            <a href="#widget">
                <li class="weather-card"">
                    <span class="temperature">${temperature}${degree}</span>
                    <span class="day">${day.day}</span>
                </li>
            </a>
            `;
		});

		container.innerHTML = output;
	}

	document.querySelector('.temp-choice-c').addEventListener('click', (e) => {
		tempUnit = e.target.innerHTML;

		renderContent(tempUnit);
	});

	document.querySelector('.temp-choice-k').addEventListener('click', (e) => {
		tempUnit = e.target.innerHTML;

		renderContent(tempUnit);
	});

	document.querySelector('.speed-choice-m').addEventListener('click', (e) => {
		windSpeedUnit = e.target.innerHTML;
	});

	document.querySelector('.speed-choice-km').addEventListener('click', (e) => {
		windSpeedUnit = e.target.innerHTML;
	});

	renderContent(tempUnit);

	document.querySelectorAll('.weather-card').forEach((card) => {
		card.addEventListener('click', (e) => {
			console.log(e.target.innerHTML);
		});
	});
});
