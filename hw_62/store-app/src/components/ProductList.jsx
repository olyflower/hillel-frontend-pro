import { memo } from "react";
import { Link } from "react-router-dom";
import { useProductsContext } from "../context/ProductsContextProvider";
import ButtonAddToCart from "../components/ButtonAddToCart";
import {
	Grid,
	Card,
	CardContent,
	CardMedia,
	Typography,
	Box,
} from "@mui/material";
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
							<Card
								component={Link}
								to={`/products/${product.id}`}
							>
								<CardMedia
									component="img"
									height="300"
									image={product.images[0]}
									alt={product.title}
								/>
								<CardContent>
									<Typography variant="h5">
										{product.title}
									</Typography>
									<Typography
										variant="body2"
										color="textSecondary"
									>
										Price: ${product.price}
									</Typography>
									<Typography
										variant="body2"
										color="textSecondary"
									>
										Category: {product.category.name}
									</Typography>
								</CardContent>
							</Card>
							<ButtonAddToCart product={product} />
						</Grid>
					))}
				</Grid>
			</Box>
		</>
	);
};

export default memo(ProductList);
