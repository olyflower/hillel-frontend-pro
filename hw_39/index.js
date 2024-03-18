function Employee(employee_name, salary_array) {
	this.employee_name = employee_name;
	this.salary_array = salary_array;
}

Employee.prototype.averageSalary = function () {
	const sumSalaries = this.salary_array.reduce((total, item) => total + item);
	const averageSalary = Math.round(sumSalaries / 12).toFixed(2);
	return averageSalary;
};

Manager.prototype = Object.create(Employee.prototype);

function Manager(employee, department, order_number, date_of_employment) {
	Employee.call(this, employee.employee_name, employee.salary_array);
	this.department = department;
	this.order_number = order_number;
	this.date_of_employment = date_of_employment;
}

Manager.prototype.showInfo = function () {
	const averageSalary = this.averageSalary();
	console.log(
		` Name: ${this.employee_name},\n Salary by month: ${this.salary_array}\n Average salary: $${averageSalary},\n Department: ${this.department},\n Order number: ${this.order_number},\n Date of employment: ${this.date_of_employment}\n `
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

manager1.showInfo(manager1);
manager2.showInfo(manager2);

console.log("----------------------------------------------------");

console.log(employee2.averageSalary());
console.log(manager2.averageSalary(employee2));
