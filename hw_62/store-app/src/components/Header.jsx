import { Link } from "react-router-dom";
import { AppBar, Toolbar, Typography, Button, Box } from "@mui/material";
import { useProductsContext } from "../context/ProductsContextProvider";

const Header = () => {
	const { totalPrice } = useProductsContext();

	return (
		<AppBar position="static">
			<Toolbar>
				<Box sx={{ flexGrow: 1, display: "flex" }}>
					<Button color="inherit" component={Link} to="/">
						Home
					</Button>
					<Button color="inherit" component={Link} to="/products">
						Products
					</Button>
				</Box>
				<Typography color="inherit">CART (${totalPrice})</Typography>
			</Toolbar>
		</AppBar>
	);
};

export default Header;
