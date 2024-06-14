import {
	createContext,
	useState,
	useEffect,
	useContext,
	useCallback,
} from "react";

const ProductsContext = createContext({});
export const useProductsContext = () => useContext(ProductsContext);

const ProductsProvider = ({ children }) => {
	const [products, setProducts] = useState([]);
	const [cart, setCart] = useState([]);
	const [visible, setVisible] = useState(false);
	const [totalPrice, setTotalPrice] = useState(0);

	useEffect(() => {
		fetchData();
	}, []);

	useEffect(() => {
		updateTotalPrice();
	}, [cart]);

	const fetchData = async () => {
		const products = await (
			await fetch(
				"https://api.escuelajs.co/api/v1/products?offset=0&limit=15"
			)
		).json();
		setProducts(products);
	};

	const addToCart = (product) => {
		setCart((prevCart) => {
			const productInCart = prevCart.find(
				(item) => item.id === product.id
			);
			if (productInCart) {
				return prevCart.map((item) =>
					item.id === product.id
						? { ...item, quantity: item.quantity + 1 }
						: item
				);
			} else {
				return [...prevCart, { ...product, quantity: 1 }];
			}
		});
		setVisible(true);
	};

	const deleteProductFromCart = (productId) => {
		setCart((prevCart) =>
			prevCart.filter((product) => product.id !== productId)
		);
	};

	const increment = (productId) => {
		setCart((prevCart) =>
			prevCart.map((item) =>
				item.id === productId
					? { ...item, quantity: item.quantity + 1 }
					: item
			)
		);
	};

	const decrement = (productId) => {
		setCart((prevCart) =>
			prevCart
				.map((item) =>
					item.id === productId
						? { ...item, quantity: item.quantity - 1 }
						: item
				)
				.filter((item) => item.quantity > 0)
		);
	};

	const clear = () => {
		setCart([]);
		setVisible(false);
	};

	const updateTotalPrice = useCallback(() => {
		const total = cart.reduce(
			(total, item) => total + item.price * item.quantity,
			0
		);
		setTotalPrice(total);
	}, [cart]);

	const context = {
		products,
		cart,
		addToCart,
		increment,
		decrement,
		deleteProductFromCart,
		clear,
		visible,
		setVisible,
		totalPrice,
		updateTotalPrice,
	};

	return (
		<ProductsContext.Provider value={context}>
			{children}
		</ProductsContext.Provider>
	);
};

export default ProductsProvider;
