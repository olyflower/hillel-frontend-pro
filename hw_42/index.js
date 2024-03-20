function Employee(employeeName, salaryArray) {
	this.employeeName = employeeName;
	this.salaryArray = salaryArray;
}

Employee.prototype.averageSalary = function (bonus = 10) {
	const sumSalaries = this.salaryArray.reduce((total, item) => total + item);
	const averageSalary = Math.round(
		(sumSalaries + (sumSalaries * bonus) / 100) / 12
	).toFixed(2);
	return `$${averageSalary} (averageSalary), ${bonus}% (bonus)`;
};

Manager.prototype = Object.create(Employee.prototype);

function Manager(employee, department, orderNumber, dateOfEmployment) {
	Employee.call(this, employee.employeeName, employee.salaryArray);
	this.department = department;
	this.orderNumber = orderNumber;
	this.dateOfEmployment = dateOfEmployment;
}

Manager.prototype.showInfo = function () {
	console.log(
		` Name: ${this.employeeName},\n Salary: ${this.salaryArray}\n Department: ${this.department},\n Order number: ${this.orderNumber},\n Date of employment: ${this.dateOfEmployment}\n `
	);
};

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

manager1.showInfo();
manager2.showInfo();

console.log("----------------------------------------------------");

console.log(manager1.averageSalary(), `Employee ${manager1.employeeName}`);
console.log(manager1.averageSalary(15), `Employee ${manager1.employeeName}`);
console.log(manager2.averageSalary(), `Employee ${manager2.employeeName}`);
console.log(manager2.averageSalary(20), `Employee ${manager2.employeeName}`);
