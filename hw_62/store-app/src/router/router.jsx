import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Products from "../pages/Products";
import ProductDetail from "../pages/ProductDetail";
import NoPage from "../pages/NoPage";
import Layout from "../pages/Layout";

const router = createBrowserRouter([
	{
		path: "/",
		element: <Layout />,
		children: [
			{
				path: "/",
				element: <Home />,
			},
			{
				path: "/products",
				element: <Products />,
				// children: [
				// 	{
				// 		path: "products/:id",
				// 		element: <ProductDetail />,
				// 	},
				// ],
			},
			{ path: "products/:id", element: <ProductDetail /> },
		],
	},
	{
		path: "*",
		element: <NoPage />,
	},
]);

export default router;
