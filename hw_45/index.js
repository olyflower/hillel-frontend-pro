function getTable() {
	const table = document.createElement("table");

	for (let j = 0; j < 10; j++) {
		const tr = document.createElement("tr");
		table.append(tr);

		for (let i = 1 + j * 10; i <= 10 + j * 10; i++) {
			const td = document.createElement("td");
			td.textContent = i;
			tr.append(td);
		}
	}
	return table
}
document.body.append(getTable());
