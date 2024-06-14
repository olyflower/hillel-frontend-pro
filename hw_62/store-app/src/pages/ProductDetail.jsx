import Header from "../components/Header";
import Item from "../components/Item";
import ProductsProvider from "../context/ProductsContextProvider";

function Products() {
	return (
		<ProductsProvider>
			<Header />
			<Item />
		</ProductsProvider>
	);
}

export default Products;
