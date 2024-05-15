import { createNode } from "../../src/helpers/nodeHelper";

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

export default displayProducts;
