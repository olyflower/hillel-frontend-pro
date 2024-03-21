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
	calculateCalories() {
		const calories =
			this.size.calories +
			this.stuffing.calories +
			Object.values(this.toppings).reduce(
				(sum, key) => sum + key.calories,
				0
			);
		return calories;
	}
	calculatePrice() {
		const price =
			this.size.price +
			this.stuffing.price +
			Object.values(this.toppings).reduce(
				(sum, key) => sum + key.price,
				0
			);
		return price;
	}
}

const hamburger = new Hamburger(
	Hamburger.SIZE_SMALL,
	Hamburger.STUFFING_CHEESE
);
hamburger.addTopping(Hamburger.TOPPING_SAUCE);
console.log(`Calories: ${hamburger.calculateCalories()}`);
console.log(`Price: ${hamburger.calculatePrice()}`);
hamburger.addTopping(Hamburger.TOPPING_MAYO).addTopping(Hamburger.TOPPING_SAUCE);
console.log(`Calories: ${hamburger.calculateCalories()}`);
console.log(`Price: ${hamburger.calculatePrice()}`);
