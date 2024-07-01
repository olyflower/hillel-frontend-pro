import { Button } from "@mui/material";
import { Link } from "react-router-dom";

const ButtonGoToProducts = () => {
	return (
		<Button
			component={Link}
			to="/products"
			color="primary"
			variant="contained"
			sx={{ mt: 2 }}
		>
			Go To Products
		</Button>
	);
};

export default ButtonGoToProducts;
