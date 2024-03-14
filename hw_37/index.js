function Person(name, age) {
	this.name = name;
	this.age = age;
}

Person.prototype.showPersonInfo = function () {
	console.log(`name: ${this.name}, age: ${this.age}`);
};

function Car(brand, model, year, registration_mark) {
	this.brand = brand;
	this.model = model;
	this.year = year;
	this.registration_mark = registration_mark;
	this.owner = null;
}

Car.prototype.assignOwner = function (owner) {
	if (owner instanceof Person && owner.age >= 18) {
		this.owner = owner;
	} else {
		console.log(
			`Person ${owner.name} cannot be the owner of a car because he is under 18 years old`
		);
	}
};

Car.prototype.carInfo = function () {
	console.log(
		`Car info:
		 brand: ${this.brand}, model: ${this.model}, year: ${this.year}, registration_mark: ${this.registration_mark}`
	);
	if (this.owner) {
		console.log("Car owner:");
		this.owner.showPersonInfo();
	} else {
		console.log("No owner");
	}
	console.log("--------------------------------------------------------");
};

const person1 = new Person("Mary", 20);
const person2 = new Person("Nick", 25);
const person3 = new Person("Tom", 15);

const car1 = new Car("BMW", "X5", 2010, 23243242);
const car2 = new Car("Nissan", "Leaf", 2015, 324356672);
const car3 = new Car("Nissan", "Note", 2016, 924356672);

car1.assignOwner(person1);
car2.assignOwner(person2);
car2.assignOwner(person3);
console.log("--------------------------------------------------------");
car1.carInfo();
car2.carInfo();
car3.carInfo();