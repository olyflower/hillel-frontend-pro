import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Cart from "../pages/Cart";
import Products from "../pages/Products";
import Product from "../pages/Product";

const router = createBrowserRouter([
	{
		path: "/",
		element: <Home />,
	},
	{
		path: "/cart",
		element: <Cart />,
	},
	{
		path: "/products",
		element: <Products />,
	},
	{
		path: "/product/:id",
		element: <Product />,
	},
]);

export default router;
