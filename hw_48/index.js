function createNode(tagName, textContent = "", classList) {
	const node = document.createElement(tagName);
	node.textContent = textContent;
	if (classList) {
		node.classList.add(classList);
	}
	return node;
}

function removeNode(node) {
	node.remove();
}

function onClickCell(cell) {
	const originalContent = cell.textContent;

	if (cell.classList.contains("flag")) return;

	const textarea = createNode("textarea", originalContent, "textarea");
	const saveButton = createNode("button", "Save");
	const cancelButton = createNode("button", "Cancel");

	saveButton.addEventListener("click", function () {
		cell.textContent = textarea.value;
		removeNode(textarea);
		removeNode(saveButton);
		removeNode(cancelButton);
		cell.classList.remove("flag");
	});

	cancelButton.addEventListener("click", function () {
		cell.textContent = originalContent;
		removeNode(textarea);
		removeNode(saveButton);
		removeNode(cancelButton);
		cell.classList.remove("flag");
	});

	cell.textContent = null;
	cell.classList.add("flag");
	cell.append(textarea, saveButton, cancelButton);
}

function main() {
	const table = document.querySelector(".table");
	table.addEventListener("click", function (event) {
		const target = event.target;

		if (target.tagName === "TD") {
			onClickCell(target);
		}
	});
}
main();
