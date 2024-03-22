class Hamburger {
	static SIZE_SMALL = { price: 50, calories: 20 };

	static SIZE_BIG = { price: 100, calories: 40 };

	static STUFFING_CHEESE = { price: 10, calories: 20 };

	static STUFFING_SALAD = { price: 20, calories: 5 };

	static STUFFING_POTATO = { price: 15, calories: 10 };

	static TOPPING_SAUCE = { price: 15, calories: 0 };

	static TOPPING_MAYO = { price: 20, calories: 5 };

	constructor(size, stuffing) {
		this.size = size;
		this.stuffing = stuffing;
		this.toppings = [];
	}

	addTopping(topping) {
		this.toppings.push(topping);
		return this;
	}

	calculateByAttribute(attribute) {
		return [
			this.size[attribute],
			this.stuffing[attribute],
			...Object.values(this.toppings).map(
				(topping) => topping[attribute]
			),
		].reduce((sum, value) => sum + value, 0);
	}
}

const hamburger = new Hamburger(
	Hamburger.SIZE_SMALL,
	Hamburger.STUFFING_CHEESE
);
hamburger.addTopping(Hamburger.TOPPING_SAUCE);
console.log(`Calories: ${hamburger.calculateByAttribute("calories")}`);
console.log(`Price: ${hamburger.calculateByAttribute("price")}`);
hamburger
	.addTopping(Hamburger.TOPPING_MAYO)
	.addTopping(Hamburger.TOPPING_SAUCE);
console.log(`Calories: ${hamburger.calculateByAttribute("calories")}`);
console.log(`Price: ${hamburger.calculateByAttribute("price")}`);
