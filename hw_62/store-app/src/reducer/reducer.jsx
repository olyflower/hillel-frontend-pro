const ACTIONS = {
	SET_PRODUCTS: "SET_PRODUCTS",
	ADD_TO_CART: "ADD_TO_CART",
	DELETE_FROM_CART: "DELETE_FROM_CART",
	INCREMENT: "INCREMENT",
	DECREMENT: "DECREMENT",
	CLEAR_CART: "CLEAR_CART",
	SET_TOTAL_PRICE: "SET_TOTAL_PRICE",
	SET_VISIBLE: "SET_VISIBLE",
};

const reducer = (model, payload) => {
	switch (payload.action) {
		case ACTIONS.SET_PRODUCTS: {
			return { ...model, products: payload.products };
		}

		case ACTIONS.ADD_TO_CART: {
			const productInCart = model.cart.find(
				(item) => item.id === payload.product.id
			);
			let updatedCart;
			if (productInCart) {
				updatedCart = model.cart.map((item) =>
					item.id === payload.product.id
						? { ...item, quantity: item.quantity + 1 }
						: item
				);
			} else {
				updatedCart = [
					...model.cart,
					{ ...payload.product, quantity: 1 },
				];
			}
			return { ...model, cart: updatedCart, visible: true };
		}

		case ACTIONS.DELETE_FROM_CART: {
			return {
				...model,
				cart: model.cart.filter(
					(product) => product.id !== payload.productId
				),
			};
		}

		case ACTIONS.INCREMENT: {
			return {
				...model,
				cart: model.cart.map((item) =>
					item.id === payload.productId
						? { ...item, quantity: item.quantity + 1 }
						: item
				),
			};
		}
		case ACTIONS.DECREMENT: {
			return {
				...model,
				cart: model.cart
					.map((item) =>
						item.id === payload.productId
							? { ...item, quantity: item.quantity - 1 }
							: item
					)
					.filter((item) => item.quantity > 0),
			};
		}

		case ACTIONS.CLEAR_CART: {
			return { ...model, cart: [], visible: false };
		}

		case ACTIONS.SET_TOTAL_PRICE: {
			return { ...model, totalPrice: payload.total };
		}

		case ACTIONS.SET_VISIBLE: {
			return { ...model, visible: payload.visible };
		}
		default:
			return model;
	}
};

export { ACTIONS, reducer };
