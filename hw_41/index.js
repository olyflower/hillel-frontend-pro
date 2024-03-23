class SuperMath {
	input() {
		const obj = {
			znak: prompt("Enter znak"),
			x: Number(prompt("Enter X")),
			y: Number(prompt("Enter Y")),
		};

		return obj;
	}

	check(obj) {
		console.log(obj);
		const answer = prompt(
			`If action ${obj.znak} enter 'Yes', else enter 'No'`
		);

		if (answer !== null && answer.toLowerCase() === "yes") {
			let result;
			switch (obj.znak) {
				case "-":
					result = obj.x - obj.y;
					break;
				case "+":
					result = obj.x + obj.y;
					break;
				case "/":
					if (obj.y !== 0) {
						result = obj.x / obj.y;
					} else {
						console.log("Invalid input. Division by zero");
						return this.check(this.input());
					}
					break;
				case "*":
					result = obj.x * obj.y;
					break;
				case "%":
					result = obj.x % obj.y;
					break;
				default:
					console.log("Invalid operator");
					return this.check(this.input());
			}
			console.log(result);
			return result;
		} else return this.check(this.input());
	}
}

const p = new SuperMath();
const obj = p.input();
p.check(obj);
