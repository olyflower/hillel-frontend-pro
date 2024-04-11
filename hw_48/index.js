function onClickCell() {
	const table = document.querySelector(".table");

	table.addEventListener("click", function (event) {
		const target = event.target;

		if (target.tagName === "TD" && !target.classList.contains("flag")) {
			const fragment = document.createDocumentFragment();

			const targetText = target.textContent;

			const textarea = document.createElement("textarea");
			textarea.value = targetText;
			textarea.classList.add("textarea");

			const buttonSave = document.createElement("button");
			buttonSave.textContent = "Save";
			buttonSave.addEventListener("click", function () {
				target.textContent = textarea.value;
				removeButtons();
			});

			const buttonCancel = document.createElement("button");
			buttonCancel.textContent = "Cancel";
			buttonCancel.addEventListener("click", function () {
				target.textContent = targetText;
				removeButtons();
			});

			function removeButtons() {
				buttonCancel.remove();
				buttonSave.remove();
				textarea.remove();
				target.classList.remove("flag");
			}

			target.classList.add("flag");

			target.textContent = null;

			fragment.append(textarea);
			fragment.append(buttonSave);
			fragment.append(buttonCancel);

			target.append(fragment);
		}
	});
}

onClickCell()
