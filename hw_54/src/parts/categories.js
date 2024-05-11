import { createNode } from "../../src/helpers/nodeHelper";

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

export default displayCategories;
