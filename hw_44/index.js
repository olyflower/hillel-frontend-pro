const range = document.querySelector("#range");
const number = document.querySelector("#number");
const blockRed = document.querySelector(".block-red");
const blockGreen = document.querySelector(".block-green");

function calculateCommission(value) {
	let commission;
	if (value < 20) {
		commission = value * 0.02;
	} else if (value >= 20 && value < 50) {
		commission = value * 0.04;
	} else if (value >= 50 && value < 75) {
		commission = value * 0.06;
	} else if (value >= 75 && value <= 100) {
		commission = value * 0.08;
	}
	return commission;
}

function calculateBlockHeight() {
	if (this === range) {
		number.value = range.value;
	}
	if (this === number) {
		range.value = number.value;
	}
	
	blockGreen.style.height = `${range.value}px`;
	blockRed.style.height = `${calculateCommission(range.value)}px`;
}

range.addEventListener("input", calculateBlockHeight);
number.addEventListener("input", calculateBlockHeight);
