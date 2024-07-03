import { useProductsContext } from "../context/ProductsContextProvider";
import { Grid, Box } from "@mui/material";
import CardComponent from "../components/CardComponent";
import ButtonAddToCart from "../components/ButtonAddToCart";

const Products = () => {
	const { products } = useProductsContext();

	return (
		<>
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

export default Products;
