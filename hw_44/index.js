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

function calculateBlocksHeight(el) {
	blockGreen.style.height = `${el.value}px`;
	blockRed.style.height = `${calculateCommission(el.value)}px`;
}

range.addEventListener("input", function () {
	number.value = range.value;
	calculateBlocksHeight(range);
});

number.addEventListener("input", function () {
	range.value = number.value;
	calculateBlocksHeight(number);
});
