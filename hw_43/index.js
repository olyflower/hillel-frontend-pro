const inputs = [...document.querySelectorAll("input")];
const textarea = document.querySelector(".textarea");

let inputValues = [];

function checkValues() {
	let newValues = inputs.map((input) => input.value);

	if (JSON.stringify(inputValues) !== JSON.stringify(newValues)) {
		inputValues = newValues;
		textarea.value = inputValues.join(",");
	}
}

checkValues();

setInterval(() => {
	checkValues();
}, 3000);
