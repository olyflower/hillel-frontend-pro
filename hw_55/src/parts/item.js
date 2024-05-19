import createForm from "../../src/helpers/createForm";

import { clearNode, createNode } from "../../src/helpers/nodeHelper.js";
import { createOrderData } from "../parts/order.js";

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

export default displayProductDetail;
