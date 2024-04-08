const data = [
	{
		id: 1,
		name: "product1",
		category: "category1",
		description: "description",
		price: 100,
	},
	{
		id: 2,
		name: "product2",
		category: "category1",
		description: "description",
		price: 150,
	},
	{
		id: 3,
		name: "product3",
		category: "category2",
		description: "description",
		price: 120,
	},
	{
		id: 4,
		name: "product4",
		category: "category3",
		description: "description",
		price: 100,
	},
	{
		id: 5,
		name: "product5",
		category: "category2",
		description: "description",
		price: 400,
	},
];

const container = document.querySelector(".container");

function createCategoryList(arr) {
	const categoryList = [];

	arr.forEach((item) => {
		if (!categoryList.includes(item.category)) {
			categoryList.push(item.category);
		}
	});
	return categoryList;
}

function displayCategory(arr) {
	const divCategory = document.createElement("div");
	divCategory.classList.add("categories");
	divCategory.textContent = "Categories";

	const list = arr.map((category) => {
		const div = document.createElement("div");
		div.append(category);
		div.addEventListener("click", function () {
			displayProduct(data, category);
		});
		return div;
	});

	divCategory.append(...list);

	return divCategory;
}

function displayProduct(arr, category) {
	const divProduct = document.createElement("div");
	divProduct.classList.add("products");
	divProduct.textContent = "Products in category";

	const productsInCategory = arr.filter((item) => item.category === category);

	const list = productsInCategory.map((item) => {
		const div = document.createElement("div");
		div.append(item.name);
		div.addEventListener("click", function () {
			displayItemInfo(item, divProduct);
		});
		return div;
	});

	divProduct.append(...list);
	container.append(divProduct);
	return divProduct;
}

function displayItemInfo(product, divProduct) {
	const divItem = document.createElement("div");
	divItem.classList.add("items");

	divItem.textContent = `Product id: ${product.id} Product name: ${product.name} Description: ${product.description} Price: ${product.price}`;
	const button = document.createElement("button");
	button.classList.add("button");
	button.textContent = "Buy";
	button.addEventListener("click", function () {
		alert("Success!");
		divItem.remove();
		divProduct.remove();
	});
	divItem.append(button);
	container.append(divItem);
}

container.append(displayCategory(createCategoryList(data)));
