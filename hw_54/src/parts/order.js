import { clearNode, createNode } from "../../src/helpers/nodeHelper";

export const createOrderData = (form) => {
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

export const displayOrderInfo = (container, product, order) => {
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
