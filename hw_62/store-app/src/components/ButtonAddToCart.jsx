import { Button } from "@mui/material";
import { useProductsContext } from "../context/ProductsContextProvider";

const ButtonAddToCart = ({product}) => {
	const { addToCart, visible, setVisible } = useProductsContext();

	const handleAddToCart = (product) => {
		addToCart(product);
		if (!visible) {
			setVisible(true);
		}
	};
	return (
		<Button
			onClick={() => handleAddToCart(product)}
			color="primary"
			sx={{ mt: 2 }}
		>
			Add to Cart
		</Button>
	);
};

export default ButtonAddToCart;
