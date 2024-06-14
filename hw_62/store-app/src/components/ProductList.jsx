import { memo } from "react";
import { Link } from "react-router-dom";
import { useProductsContext } from "../context/ProductsContextProvider";
import {
	Grid,
	Card,
	CardContent,
	CardMedia,
	Typography,
	Button,
	Modal,
	Box,
} from "@mui/material";
import Header from "../components/Header";
import Cart from "../components/Cart";

const ProductList = () => {
	const { products, addToCart, visible, setVisible } = useProductsContext();

	const handleAddToCart = (product) => {
		addToCart(product);
		if (!visible) {
			setVisible(true);
		}
	};

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
							<Button onClick={() => handleAddToCart(product)}>
								Add to Cart
							</Button>
						</Grid>
					))}
				</Grid>
			</Box>

			<Modal open={visible} onClose={() => setVisible(false)}>
				<Box
					sx={{
						position: "absolute",
						top: "50%",
						left: "50%",
						transform: "translate(-50%, -50%)",
						width: 800,
						bgcolor: "background.paper",
						p: 2,
					}}
				>
					<Cart />
				</Box>
			</Modal>
		</>
	);
};

export default memo(ProductList);
