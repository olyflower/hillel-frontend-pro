// createNode
export const createNode = ({
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

// clear Node
export const clearNode = (node) => {
	while (node.firstChild) {
		node.firstChild.remove();
	}
};


