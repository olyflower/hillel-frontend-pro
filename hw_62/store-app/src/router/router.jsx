import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Products from "../pages/Products";
import ProductDetail from "../pages/ProductDetail";
import NoPage from "../pages/NoPage";

const router = createBrowserRouter([
	{
		path: "/",
		element: <Home />,
	},
	{
		path: "/products",
		element: <Products />,
	},
	{
		path: "/products/:id",
		element: <ProductDetail />,
	},
	{
		path: "*",
		element: <NoPage />,
	},
]);

export default router;
