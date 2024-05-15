import displayCategories from "./parts/categories";
import displayProducts from "./parts/product";
import displayProductDetail from "./parts/item";

import { displayOrderInfo } from "./parts/order";
import { clearNode } from "../src/helpers/nodeHelper";

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
				{ id: 1, name: "Shirt", brand: "Nike", price: 25 },
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
