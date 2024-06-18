import { memo } from "react";

import { useProductsContext } from "../context/ProductsContextProvider";
import ButtonAddToCart from "../components/ButtonAddToCart";
import CardComponent from "../components/CardComponent";
import { Grid, Box } from "@mui/material";
import Header from "../components/Header";

const ProductList = () => {
	const { products } = useProductsContext();

	return (
		<>
			<Header />
			<Box mt={4}>
				<Grid container spacing={2}>
					{products.map((product) => (
						<Grid
							item
							key={product.id}
							xs={12}
							sm={6}
							md={4}
							lg={3}
						>
							<CardComponent product={product} />
							<ButtonAddToCart product={product} />
						</Grid>
					))}
				</Grid>
			</Box>
		</>
	);
};

export default memo(ProductList);
