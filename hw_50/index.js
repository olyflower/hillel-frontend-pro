const express = require("express");
const { readFile } = require("./helpers/readFile");

const app = express();
const port = 3000;
app.listen(port);

app.get("/products/", (req, res) => {
	readFile({
		url: "./data.json",
		callback: (error, data) => {
			if (error) {
				res.status(500).json({ error, message: "Error reading file" });
				return;
			}

			let products = JSON.parse(data);

			const { stock, minPrice, maxPrice } = req.query;

			if (stock) {
				const productStock = stock === "true";
				products = products.filter(
					(product) => product.productStock === productStock
				);
			}

			if (minPrice && maxPrice) {
				products = products.filter(
					(product) =>
						parseFloat(product.productPrice) >=
							parseFloat(minPrice) &&
						parseFloat(product.productPrice) <= parseFloat(maxPrice)
				);
			}

			res.json(products);
		},
	});
});

app.get("/products/name", (req, res) => {
	readFile({
		url: "./data.json",
		callback: (error, data) => {
			if (error) {
				res.status(500).json({ error, message: "Error reading file" });
				return;
			}

			let products = JSON.parse(data);

			const { name } = req.query;

			if (name) {
				products = products.filter((product) =>
					product.productName.includes(name)
				);
			}

			res.json(products);
		},
	});
});

app.get("/products/:id", (req, res) => {
	readFile({
		url: "./data.json",
		callback: (error, data) => {
			if (error) {
				res.status(500).json({ error, message: "Error reading file" });
				return;
			}

			const products = JSON.parse(data);

			const product = products.find(
				(product) => product.productId === parseInt(req.params.id)
			);
			if (product) {
				res.json(product);
			} else {
				res.status(404).json({ Error: "Product not found" });
				return;
			}
		},
	});
});

app.get("*", (req, res) => {
	res.status(404).send("Not Found");
});
