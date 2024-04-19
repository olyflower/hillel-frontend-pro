const data = [
	{
		category: "category1",
		products: ["product1", "product2", "product3"],
	},
	{
		category: "category2",
		products: ["product3", "product4", "product5"],
	},
	{
		category: "category3",
		products: ["product6", "product7", "product8"],
	},
	{
		category: "category4",
		products: ["product9", "product10", "product11"],
	},
];

function displayCategories(arr) {
	const categories = document.querySelector(".categories");

	const list = arr.map((item) => {
		const div = document.createElement("div");
		div.textContent = item.category;
		div.addEventListener("click", function () {
			displayProducts(item.products);
		});
		return div;
	});

	categories.append(...list);

	return categories;
}

function displayProducts(items) {
	const products = document.querySelector(".products");

	products.innerHTML = "";

	products.textContent = "Products";

	const list = items.map((item) => {
		const div = document.createElement("div");
		div.textContent = item;
		div.addEventListener("click", function () {
			displayInfo(item, products);
		});
		return div;
	});

	products.append(...list);

	return products;
}

function displayInfo(item, products) {
	const infoItems = document.querySelector(".items");
	infoItems.innerHTML = "";
	infoItems.textContent = "Product Info";

	const fragment = document.createDocumentFragment();

	const productItem = document.createElement("div");
	productItem.textContent = item;
	fragment.append(productItem);

	const button = document.createElement("button");
	button.textContent = "Buy";
	fragment.append(button);
	button.addEventListener("click", function () {
		alert("Success!");
		products.innerHTML = "";
		infoItems.innerHTML = "";
	});

	infoItems.append(fragment);
}

displayCategories(data);
