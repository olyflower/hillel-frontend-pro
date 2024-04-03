const data = [
	1,
	2,
	[1.1, 1.2, 1.3, [100, ["test1", "test2"], 200]],
	3,
	["a", "b"],
];

const ul = document.createElement("ul");
document.body.append(ul);

function nestedList(arr, el) {
	arr.forEach((item) => {
		const li = document.createElement("li");

		if (Array.isArray(item)) {
			const ulChild = document.createElement("ul");
			li.appendChild(ulChild);
			nestedList(item, ulChild);
		} else {
			li.textContent = item;
		}

		el.appendChild(li);
	});
}

const button = document.querySelector(".button");

button.addEventListener("click", function getList() {
	nestedList(data, ul);
});
