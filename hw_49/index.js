// create new Node

const createNode = ({
	tagName = "",
	className = "",
	dataAttrs = {},
	children = null,
	event = "",
	handler = null,
}) => {
	const node = document.createElement(tagName);

	className && node.classList.add(className);
	Object.keys(dataAttrs).forEach(
		(key) => (node.dataset[key] = dataAttrs[key])
	);
	event && handler && node.addEventListener(event, handler);
	if (children) {
		Array.isArray(children)
			? node.append(...children)
			: node.append(children);
	}
	return node;
};

//create Form

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

//Order logic

const createOrderData = (form) => {
	const clientName = form.querySelector(".form-order__fullname");
	const deliveryCity = form.querySelector(".form-order__city");
	const novaPoshtaDepartment = form.querySelector(".form-order__novaposhta");
	const paymentMethod = form.querySelector(".form-order__payment");
	const quantity = form.querySelector(".form-order__quantity");
	const comment = form.querySelector("textarea");

	const order = {
		clientName: clientName.value,
		deliveryCity: deliveryCity.value,
		novaPoshtaDepartment: novaPoshtaDepartment.value,
		paymentMethod: paymentMethod.value,
		quantity: quantity.value,
		comment: comment.value,
	};
	return order;
};

const displayOrderInfo = (container, product, order) => {
	clearNode(container);

	const orderInfo = createNode({
		tagName: "h1",
		className: "order-info",
		children: "Order Info",
	});

	const productName = createNode({
		tagName: "div",
		children: product.name,
	});

	const productPrice = createNode({
		tagName: "div",
		children: `Price: $${product.price}`,
	});

	const clientName = createNode({
		tagName: "div",
		children: `Client name: ${order.clientName}`,
	});

	const deliveryCity = createNode({
		tagName: "div",
		children: `Delivery city: ${order.deliveryCity}`,
	});

	const novaPoshtaDepartment = createNode({
		tagName: "div",
		children: `Nova Poshta Department: ${order.novaPoshtaDepartment}`,
	});

	const paymentMethod = createNode({
		tagName: "div",
		children: `Payment Method: ${order.paymentMethod}`,
	});

	const quantity = createNode({
		tagName: "div",
		children: `Quantity: ${order.quantity}`,
	});

	const comment = createNode({
		tagName: "div",
		children: `Comment: ${order.comment}`,
	});

	orderInfo.append(
		productName,
		productPrice,
		clientName,
		deliveryCity,
		novaPoshtaDepartment,
		paymentMethod,
		quantity,
		comment
	);
	container.append(orderInfo);
};

//Clear node function

const clearNode = (node) => {
	while (node.firstChild) {
		node.firstChild.remove();
	}
};

//Category list logic

const makeCategoriesList = (model) => {
	return model.map((category) =>
		createNode({
			tagName: "li",
			className: "category",
			dataAttrs: { category: category },
			children: category,
		})
	);
};

const displayCategories = (container, model, handler) => {
	container.append(...makeCategoriesList(model));

	container.onclick = ({ target }) => {
		const category = target.dataset.category;
		if (category) {
			handler(category);
		}
	};
};

//Product list logic

const makeProduct = (product) => {
	const name = createNode({
		tagName: "h2",
		className: "product__name",
		children: product.name,
	});

	const price = createNode({
		tagName: "div",
		className: "product__price",
		children: `$${product.price}`,
	});

	return createNode({
		tagName: "div",
		className: "product",
		dataAttrs: { id: product.id },
		children: [name, price],
	});
};

const makeProductsList = (model) => {
	return model.map((product) => makeProduct(product));
};

const displayProducts = (container, model, handler) => {
	container.append(...makeProductsList(model));

	container.onclick = ({ target }) => {
		const targetProduct = target.closest(".product");
		const id = targetProduct.dataset.id;

		id && handler(id);
	};
};

//Item logic

const makeItem = (product) => {
	const name = createNode({
		tagName: "h2",
		className: "product__name",
		children: product.name,
	});

	const brand = createNode({
		tagName: "h3",
		className: "product__brand",
		children: product.brand,
	});

	const price = createNode({
		tagName: "div",
		className: "product__price",
		children: `$${product.price}`,
	});

	const button = createNode({
		tagName: "button",
		className: "button",
		children: "Buy",
	});

	return createNode({
		tagName: "div",
		className: "item",
		dataAttrs: { id: product.id },
		children: [name, brand, price, button],
	});
};

const displayProductDetail = (container, product, handler) => {
	clearNode(container);
	const item = makeItem(product);
	container.append(item);

	const button = item.querySelector(".button");
	button.addEventListener("click", () => {
		const form = createForm();
		clearNode(container);
		container.append(item, form);

		form.addEventListener("submit", (event) => {
			event.preventDefault();
			const order = createOrderData(form);
			if (order.clientName && order.novaPoshtaDepartment) {
				handler(container, product, order);
			}
		});
	});
};

//main

function initStoreModule(store) {
	const categories = document.querySelector(".categories");
	const products = document.querySelector(".products");
	const items = document.querySelector(".items");

	displayCategories(categories, store.meta, (category) => {
		clearNode(products);
		clearNode(items);
		displayProducts(products, store.data[category], (productId) => {
			const product = store.data[category].find(
				(product) => product.id == productId
			);
			displayProductDetail(items, product, displayOrderInfo);
		});
	});
}

function main() {
	initStoreModule({
		meta: ["Clothing", "Footwear", "Accessories"],
		data: {
			Clothing: [
				{ id: 1, name: "T-Shirt", brand: "Nike", price: 25 },
				{ id: 2, name: "Jeans", brand: "Levi's", price: 50 },
				{ id: 3, name: "Dress", brand: "Zara", price: 70 },
			],
			Footwear: [
				{ id: 4, name: "Sneakers", brand: "Adidas", price: 80 },
				{ id: 5, name: "Boots", brand: "Timberland", price: 120 },
				{ id: 6, name: "Sandals", brand: "Zara", price: 60 },
			],
			Accessories: [
				{ id: 7, name: "Watch", brand: "Fossil", price: 150 },
				{ id: 8, name: "Sunglasses", brand: "Ray-Ban", price: 100 },
				{ id: 9, name: "Backpack", brand: "Fossil", price: 200 },
			],
		},
	});
}

main();
