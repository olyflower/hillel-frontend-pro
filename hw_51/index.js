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
		if (xhr.status != 200) {
			error(xhr.statusText);
		}
		data = JSON.parse(xhr.responseText);

		const {
			main: { temp, pressure, humidity },
			wind: { speed, deg },
			weather: [{ description, icon }],
		} = data;

		const {
			title,
			temp: tempElement,
			pressure: pressureElement,
			description: descriptionElement,
			humidity: humidityElement,
			speed: speedElement,
			deg: degElement,
			icon: iconElement,
		} = elements;

		title.textContent = `Current weather in ${city}`;
		tempElement.textContent = `Temperature : ${temp} °C`;
		pressureElement.textContent = `Pressure ${pressure}`;
		descriptionElement.textContent = `Description: ${description}`;
		humidityElement.textContent = `Humidity: ${humidity} %`;
		speedElement.textContent = `Wind speed: ${speed} m/s`;
		degElement.textContent = `Wind direction: ${deg}`;
		iconElement.src = `http://openweathermap.org/img/w/${icon}.png`;

		success(data);
	};

	xhr.onerror = error;

	xhr.open(method, url);

	method === "GET" ? xhr.send() : xhr.send(data);
}

const getElements = () => {
	let elements = null;
	return () => {
		if (!elements) {
			elements = {
				city: document.querySelector("#city"),
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
		return elements;
	};
};

const getWetherOptions = getElements();

const elements = getWetherOptions();

function getWeather() {
	document.querySelector(".button").addEventListener("click", function () {
		const city = elements.city.value;
		if (!city) {
			return;
		}

		sendAjax({
			city: city,
			url: `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&APPID=487bcb5fa64667c81d98bbdaed55ad5f`,
			method: "GET",
			elements,
			success: (data) => {
				console.log(data, "");
			},
			error: (e) => {
				console.log("Error", e);
			},
		});
	});
}

getWeather();
