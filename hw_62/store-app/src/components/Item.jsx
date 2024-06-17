import { useParams } from "react-router-dom";
import { Typography, Card, CardMedia, Grid } from "@mui/material";
import ButtonGoToProducts from "../components/ButtonGoToProducts";
import ButtonAddToCart from "../components/ButtonAddToCart";
import { useProductsContext } from "../context/ProductsContextProvider";

const Item = () => {
	const { id } = useParams();
	const { products } = useProductsContext();
	const product = products.find((item) => item.id === parseInt(id));

	if (!product) {
		return <Typography>Product not found</Typography>;
	}

	const { title, price, category, description, images } = product;

	return (
		<Grid container spacing={2}>
			<Grid item xs={12}>
				<Typography variant="h4">{title}</Typography>
			</Grid>
			{images.map((image, index) => (
				<Grid item xs={12} md={4} key={index}>
					<Card>
						<CardMedia
							component="img"
							height="auto"
							image={image}
							alt={title}
						/>
					</Card>
				</Grid>
			))}
			<Grid item md={12}>
				<Typography variant="h4">Price: ${price}</Typography>
				<Typography variant="h5">Category: {category.name}</Typography>
				<Typography>Description: {description}</Typography>
				<ButtonGoToProducts />
				<ButtonAddToCart product={product} />
			</Grid>
		</Grid>
	);
};

export default Item;
