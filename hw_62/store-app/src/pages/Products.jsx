import ProductList from "../components/ProductList";
import ProductsProvider from "../context/ProductsContextProvider";

function Products() {
	return (
		<ProductsProvider>
			<ProductList />
		</ProductsProvider>
	);
}

export default Products;
