import { Link } from "react-router-dom";
import { Card, CardContent, CardMedia, Typography } from "@mui/material";

const CardComponent = ({ product }) => {
	return (
		<Card component={Link} to={`/products/${product.id}`}>
			<CardMedia
				component="img"
				height="300"
				image={product.images[0]}
				alt={product.title}
			/>
			<CardContent>
				<Typography variant="h5">{product.title}</Typography>
				<Typography variant="body2" color="textSecondary">
					Price: ${product.price}
				</Typography>
				<Typography variant="body2" color="textSecondary">
					Category: {product.category.name}
				</Typography>
			</CardContent>
		</Card>
	);
};

export default CardComponent;
