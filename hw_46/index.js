const data = [
	1,
	2,
	[1.1, 1.2, 1.3, [100, ["test1", "test2"], 200]],
	3,
	["a", "b"],
];

function generateList(arr) {
	const ul = document.createElement("ul");

	const list = arr.map((item) => {
		const li = document.createElement("li");
		li.append(Array.isArray(item) ? generateList(item) : item);
		return li;
	});

	ul.append(...list);

	return ul;
}

const button = document.querySelector(".button");

button.addEventListener("click", function () {
	document.body.append(generateList(data));
});
