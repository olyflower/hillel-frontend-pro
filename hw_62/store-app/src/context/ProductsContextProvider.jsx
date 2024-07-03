import {
	createContext,
	useEffect,
	useContext,
	useCallback,
	useReducer,
} from "react";
import { ACTIONS, reducer } from "../reducer/reducer";

const ProductsContext = createContext({});
export const useProductsContext = () => useContext(ProductsContext);

const initialState = {
	products: [],
	cart: [],
	visible: false,
	totalPrice: 0,
};

const ProductsProvider = ({ children }) => {
	const [model, dispatch] = useReducer(reducer, initialState);

	useEffect(() => {
		fetchData();
	}, []);

	useEffect(() => {
		updateTotalPrice();
	}, [model.cart]);

	const fetchData = async () => {
		const products = await (
			await fetch(
				"https://api.escuelajs.co/api/v1/products"
			)
		).json();
		dispatch({ action: ACTIONS.SET_PRODUCTS, products });
	};

	const addToCart = (product) => {
		dispatch({ action: ACTIONS.ADD_TO_CART, product });
	};

	const deleteProductFromCart = (productId) => {
		dispatch({ action: ACTIONS.DELETE_FROM_CART, productId });
	};

	const increment = (productId) => {
		dispatch({ action: ACTIONS.INCREMENT, productId });
	};

	const decrement = (productId) => {
		dispatch({ action: ACTIONS.DECREMENT, productId });
	};

	const clearCart = () => {
		dispatch({ action: ACTIONS.CLEAR_CART });
	};

	const updateTotalPrice = useCallback(() => {
		const total = model.cart.reduce(
			(total, item) => total + item.price * item.quantity,
			0
		);
		dispatch({ action: ACTIONS.SET_TOTAL_PRICE, total });
	}, [model.cart]);

	const setVisible = (visible) => {
		dispatch({ action: ACTIONS.SET_VISIBLE, visible });
	};

	const context = {
		products: model.products,
		cart: model.cart,
		addToCart,
		increment,
		decrement,
		deleteProductFromCart,
		clearCart,
		visible: model.visible,
		setVisible,
		totalPrice: model.totalPrice,
		updateTotalPrice,
	};

	return (
		<ProductsContext.Provider value={context}>
			{children}
		</ProductsContext.Provider>
	);
};

export default ProductsProvider;
