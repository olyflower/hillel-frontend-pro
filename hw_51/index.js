function sendAjax({
	city,
	url,
	method = "GET",
	data = null,
	elements,
	success,
	error,
}) {
	const xhr = new XMLHttpRequest();

	xhr.onload = () => {
		data = JSON.parse(xhr.responseText);

		elements.title.textContent = `Current weather in ${city}`;
		elements.temp.textContent = `Temperature : ${data.main.temp} °C`;
		elements.pressure.textContent = `Pressure ${data.main.pressure}`;
		elements.description.textContent = `Description: ${data.weather[0].description}`;
		elements.humidity.textContent = `Humidity: ${data.main.humidity} %`;
		elements.speed.textContent = `Wind speed: ${data.wind.speed} m/s%`;
		elements.deg.textContent = `Wind direction: ${data.wind.deg}`;

		elements.icon.src = `http://openweathermap.org/img/w/${data.weather[0].icon}.png`;
	};

	xhr.onerror = error;

	xhr.open(method, url);

	method === "GET" ? xhr.send() : xhr.send(data);
}

function selectElements() {
	return {
		title: document.querySelector(".weather__title"),
		temp: document.querySelector(".weather__temp"),
		pressure: document.querySelector(".weather__pressure"),
		description: document.querySelector(".weather__description"),
		humidity: document.querySelector(".weather__humidity"),
		speed: document.querySelector(".weather__speed"),
		deg: document.querySelector(".weather__deg"),
		icon: document.querySelector(".weather__icon"),
	};
}

function getWeather() {
	document.querySelector(".button").addEventListener("click", function () {
		const city = document.querySelector("#city").value;
		if (city) {
			const elements = selectElements();
			sendAjax({
				city: city,
				url: `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&APPID=487bcb5fa64667c81d98bbdaed55ad5f`,
				method: "GET",
				elements,
				error: (e) => {
					console.log("Error", e);
				},
			});
		}
	});
}

getWeather();
