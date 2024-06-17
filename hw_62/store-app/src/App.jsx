import { RouterProvider } from "react-router-dom";
import ProductsProvider from "./context/ProductsContextProvider";
import router from "./router/router";
import "./App.css";

function App() {
	return (
		<ProductsProvider>
			<RouterProvider router={router} />
		</ProductsProvider>
	);
}

export default App;
