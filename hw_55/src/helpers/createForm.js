import { createNode } from "../helpers/nodeHelper.js";

const createForm = () => {
	const form = createNode({
		tagName: "form",
		className: "form-order",
	});

	const contacts = createContactsFields();
	const novaPoshta = createNPFields();
	const paymentTypes = createPaymentTypes();

	const button = createNode({
		tagName: "button",
		className: "button",
		children: "Submit",
	});

	form.append(...contacts, ...novaPoshta, ...paymentTypes, button);

	form.addEventListener("submit", function (event) {
		const fullNameInput = form.querySelector(".form-order__fullname");
		const novaPoshtaInput = form.querySelector(".form-order__novaposhta");

		if (!fullNameInput.value || !novaPoshtaInput.value) {
			event.preventDefault();
			alert("Fill in required fields!");
		}
	});

	return form;
};

const createContactsFields = () => {
	const fullNameLabel = createNode({
		tagName: "label",
		className: "required",
		children: "Enter name:",
	});

	const fullNameInput = createNode({
		tagName: "input",
		className: "form-order__fullname",
	});

	const citySelectLabel = createNode({
		tagName: "label",
		children: "Select city:",
	});

	const citySelect = createNode({
		tagName: "select",
		className: "form-order__city",
	});

	const cities = ["Odesa", "Lviv", "Kyiv", "Dnipro"];
	cities.forEach((city) => {
		const option = createNode({
			tagName: "option",
			children: city,
		});
		citySelect.append(option);
	});

	const quantitySelectLabel = createNode({
		tagName: "label",
		children: "Select quantity:",
	});

	const quantitySelect = createNode({
		tagName: "select",
		className: "form-order__quantity",
	});

	const quantityItems = Array.from({ length: 100 }, (_, i) => i + 1);

	quantityItems.forEach((item) => {
		const option = createNode({
			tagName: "option",
			children: item,
		});
		quantitySelect.append(option);
	});

	const textareaLabel = createNode({
		tagName: "label",
		children: "Leave comment:",
	});

	const textareaInput = createNode({
		tagName: "textarea",
		className: "form-order__comment",
	});

	return [
		fullNameLabel,
		fullNameInput,
		citySelectLabel,
		citySelect,
		quantitySelectLabel,
		quantitySelect,
		textareaLabel,
		textareaInput,
	];
};

const createNPFields = () => {
	const novaPoshtaLabel = createNode({
		tagName: "label",
		className: "required",
		children: "Enter Nova Poshta department:",
	});

	const novaPoshtaInput = createNode({
		tagName: "input",
		className: "form-order__novaposhta",
	});

	return [novaPoshtaLabel, novaPoshtaInput];
};

const createPaymentTypes = () => {
	const paymentLabel = createNode({
		tagName: "label",
		children: "Select payment method:",
	});

	const paymentSelect = createNode({
		tagName: "select",
		className: "form-order__payment",
	});

	const payment = ["Card", "Cash"];
	payment.forEach((item) => {
		const option = createNode({
			tagName: "option",
			children: item,
		});
		paymentSelect.append(option);
	});

	return [paymentLabel, paymentSelect];
};

export default createForm;
