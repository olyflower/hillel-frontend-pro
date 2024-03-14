function Person(name, gender) {
	this.name = name;
	this.gender = gender;
}

function Flat() {
	this.residence = [];
}

Flat.prototype.addResident = function (person) {
	if (person instanceof Person) {
		this.residence.push(person);
	}
};

function House(max_flats) {
	this.max_flats = max_flats;
	this.flats = [];
}

House.prototype.addFlat = function (flat) {
	if (flat instanceof Flat && this.flats.length < this.max_flats) {
		this.flats.push(flat);
	} else {
		console.log(`The house is full`);
	}
};

const person1 = new Person("Mary", "female");
const person2 = new Person("Tom", "male");
const person3 = new Person("John", "male");

const flat1 = new Flat();
const flat2 = new Flat();

flat1.addResident(person1);
flat1.addResident(person2);
flat2.addResident(person3);

const flats = [flat1.residence, flat2.residence];
console.log(flats);

const house = new House(5);
house.addFlat(flat1);
house.addFlat(flat2);
console.log(house.flats);
