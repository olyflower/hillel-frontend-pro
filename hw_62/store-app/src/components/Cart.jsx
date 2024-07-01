import { Link } from "react-router-dom";
import { useMemo } from "react";
import { useProductsContext } from "../context/ProductsContextProvider";
import {
	List,
	ListItem,
	ListItemText,
	Button,
	Typography,
	Box,
	IconButton,
	Paper,
} from "@mui/material";
import { Add, Remove, Delete } from "@mui/icons-material";

const Cart = () => {
	const {
		cart,
		increment,
		decrement,
		deleteProductFromCart,
		clearCart,
		setVisible,
	} = useProductsContext();

	const getTotalPrice = useMemo(() => {
		return cart.reduce(
			(total, item) => total + item.price * item.quantity,
			0
		);
	}, [cart]);

	const placeOrder = () => {
		const order = cart
			.map(
				(item) =>
					`${item.title} - ${item.quantity} x $${item.price.toFixed(
						2
					)} Sum: $${(item.quantity * item.price).toFixed(2)}`
			)
			.join("\n");
		const total = getTotalPrice.toFixed(2);
		if (parseFloat(total) > 0) {
			alert(
				`Order placed successfully!\n\nProducts:\n${order}\n\nTotal sum: $${total}`
			);
			clearCart();
		} else {
			alert("Add products to your cart to make order!");
		}
		setVisible(false);
	};

	return (
		<Paper elevation={3} sx={{ p: 2, maxWidth: 800, m: "auto" }}>
			<Box
				sx={{
					display: "flex",
					justifyContent: "center",
					alignItems: "center",
					mb: 2,
				}}
			>
				<Typography variant="h4" gutterBottom>
					Cart
				</Typography>
			</Box>
			<List>
				{cart.map((item) => (
					<ListItem key={item.id} divider>
						<Box
							sx={{
								display: "flex",
								alignItems: "center",
								width: "100%",
								justifyContent: "space-between",
							}}
						>
							<Box sx={{ flexGrow: 1 }}>
								<ListItemText
									primary={
										<Link to={`/products/${item.id}`}>
											{item.title}
										</Link>
									}
									secondary={`Price: $${item.price.toFixed(
										2
									)} - Quantity: ${item.quantity}`}
								/>
								<Typography
									variant="body2"
									color="textSecondary"
								>
									Category: {item.category.name}
								</Typography>
							</Box>
							<Box>
								<IconButton
									onClick={() => decrement(item.id)}
									color="primary"
								>
									<Remove />
								</IconButton>
								<IconButton
									onClick={() => increment(item.id)}
									color="primary"
								>
									<Add />
								</IconButton>
								<IconButton
									onClick={() =>
										deleteProductFromCart(item.id)
									}
									color="secondary"
								>
									<Delete />
								</IconButton>
							</Box>
						</Box>
					</ListItem>
				))}
			</List>
			<Box
				sx={{
					display: "flex",
					justifyContent: "space-between",
					mt: 2,
				}}
			>
				<Typography variant="h6">Total:</Typography>
				<Typography variant="h6">
					${getTotalPrice.toFixed(2)}
				</Typography>
			</Box>
			<Box
				sx={{
					display: "flex",
					justifyContent: "space-between",
					mt: 2,
				}}
			>
				<Button
					onClick={() => setVisible(false)}
					variant="contained"
					sx={{ mt: 2 }}
				>
					Close
				</Button>
				<Button
					onClick={placeOrder}
					variant="contained"
					color="primary"
					sx={{ mt: 2 }}
				>
					Place Order
				</Button>
			</Box>
		</Paper>
	);
};

export default Cart;
