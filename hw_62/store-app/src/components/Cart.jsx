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
import { Add, Remove } from "@mui/icons-material";

const Cart = () => {
	const { cart, increment, decrement, clear, setVisible } =
		useProductsContext();

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
					)}`
			)
			.join("\n");
		const total = getTotalPrice.toFixed(2);
		alert(
			`Order placed successfully!\n\nProducts:\n${order}\n\nTotal sum: $${total}`
		);
		clear();
		setVisible(false);
	};

	return (
		<Paper elevation={3} sx={{ padding: 2, maxWidth: 800, margin: "auto" }}>
			<Box
				sx={{
					display: "flex",
					justifyContent: "center",
					alignItems: "center",
					marginBottom: 2,
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
									primary={item.title}
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
									onClick={() => increment(item.id)}
									color="primary"
								>
									<Add />
								</IconButton>
								<IconButton
									onClick={() => decrement(item.id)}
									color="primary"
								>
									<Remove />
								</IconButton>
								<IconButton
									onClick={() =>
										deleteProductFromCart(item.id)
									}
									color="secondary"
								></IconButton>
							</Box>
						</Box>
					</ListItem>
				))}
			</List>
			<Box
				sx={{
					display: "flex",
					justifyContent: "space-between",
					marginTop: 2,
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
					marginTop: 2,
				}}
			>
				<Button
					onClick={() => setVisible(false)}
					variant="contained"
					sx={{ marginTop: 2 }}
				>
					Close
				</Button>
				<Button
					onClick={placeOrder}
					variant="contained"
					color="primary"
					sx={{ marginTop: 2 }}
				>
					Place Order
				</Button>
			</Box>
		</Paper>
	);
};

export default Cart;
