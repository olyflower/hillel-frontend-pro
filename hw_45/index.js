function createTd(number) {
	const td = document.createElement("td");
	td.textContent = number;
	return td;
}

function createTr(j) {
	const tr = document.createElement("tr");
	const numbers = Array.from(
		{ length: 10 },
		(_, index) => index + 1 + j * 10
	);

	numbers.map((item) => {
		const td = createTd(item);
		tr.append(td);
	});
	return tr;
}

function createTable() {
	const table = document.createElement("table");
	const numbers = Array.from({ length: 10 }, (_, index) => index);

	numbers.map((item) => {
		const tr = createTr(item);
		table.append(tr);
	});

	return table;
}

document.body.append(createTable());
