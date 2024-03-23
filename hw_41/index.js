class SuperMath {
	input() {
		const obj = {
			znak: prompt("Enter znak"),
			x: Number(prompt("Enter X")),
			y: Number(prompt("Enter Y")),
		};

		console.log(obj);
		return obj;
	}

	check(obj) {
		const operations = {
			"+": () => obj.x + obj.y,
			"-": () => obj.x - obj.y,
			"*": () => obj.x * obj.y,
			"/": () => obj.x / obj.y,
			"%": () => obj.x % obj.y,
		};

		console.log(obj);
		const answer = prompt(
			`If action ${obj.znak} enter 'yes', else enter 'no'`
		);

		if (answer !== null && answer.toLowerCase() === "yes") {
			switch (obj.znak) {
				case "+":
				case "-":
				case "*":
				case "/":
				case "%":
					if (obj.znak === "/" && obj.y === 0) {
						console.log("Invalid input. Division by zero");
						return this.check(this.input());
					}
					console.log(operations[obj.znak]());
					return operations[obj.znak]();

				default:
					console.log("Invalid operator");
					return this.check(this.input());
			}
		} else {
			return this.check(this.input());
		}
	}
}

const p = new SuperMath();
const obj = p.input();
p.check(obj);
