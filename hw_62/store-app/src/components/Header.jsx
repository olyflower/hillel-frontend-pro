import { Link } from "react-router-dom";
import { AppBar, Toolbar, Typography, Button, Box, Modal } from "@mui/material";
import { useProductsContext } from "../context/ProductsContextProvider";
import Cart from "../components/Cart";

const Header = () => {
	const { totalPrice, visible, setVisible } = useProductsContext();

	const handleClose = () => {
		setVisible(false);
	};
	const handleOpen = () => {
		setVisible(true);
	};

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
				<Modal open={visible} onClose={handleClose}>
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
				<Typography
					color="inherit"
					sx={{ cursor: "pointer" }}
					onClick={handleOpen}
				>
					CART (${totalPrice})
				</Typography>
			</Toolbar>
		</AppBar>
	);
};

export default Header;
