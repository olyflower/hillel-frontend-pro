class Employee {
	constructor(employeeName, salaryArray) {
		this.employeeName = employeeName;
		this.salaryArray = salaryArray;
	}
	averageSalary() {
		const sumSalaries = this.salaryArray.reduce(
			(total, item) => total + item
		);
		const averageSalary = parseFloat(sumSalaries / 12).toFixed(2);
		return averageSalary;
	}
}

class Manager extends Employee {
	constructor(employee, department, orderNumber, dateOfEmployment) {
		super(employee.employeeName, employee.salaryArray);
		this.department = department;
		this.orderNumber = orderNumber;
		this.dateOfEmployment = dateOfEmployment;
	}
	displayInfo() {
		console.log(
			` Name: ${this.employeeName},\n Salary: ${this.salaryArray}\n Department: ${this.department},\n Order number: ${this.orderNumber},\n Date of employment: ${this.dateOfEmployment}\n `
		);
	}

	averageSalary(bonus = 10) {
		const baseAverageSalary = super.averageSalary();
		const averageSalaryWithBonus = parseFloat(
			parseFloat(baseAverageSalary) + (baseAverageSalary * bonus) / 100
		).toFixed(2);

		return averageSalaryWithBonus;
	}
}

const employee1 = new Employee(
	"Mary",
	[100, 300, 150, 100, 300, 150, 100, 300, 150, 400, 300, 120]
);
const employee2 = new Employee(
	"Tom",
	[180, 320, 150, 100, 300, 150, 100, 200, 150, 480, 300, 125]
);

console.log(employee1);
console.log(employee2);
console.log("----------------------------------------------------");

const manager1 = new Manager(employee1, "Main", 1241624872, "12.03.2000");
const manager2 = new Manager(employee2, "Finance", 7871624872, "1.10.2005");

console.log(manager1);
console.log(manager2);

console.log("----------------------------------------------------");

manager1.displayInfo();
manager2.displayInfo();

console.log("----------------------------------------------------");

console.log(employee1.averageSalary());
console.log(employee2.averageSalary());
console.log("----------------------------------------------------");
console.log(manager1.averageSalary());
console.log(manager1.averageSalary(20));
console.log(manager2.averageSalary());
console.log(manager2.averageSalary(15));
