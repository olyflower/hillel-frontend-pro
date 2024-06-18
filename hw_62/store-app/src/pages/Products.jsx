import ProductList from "../components/ProductList";
import { useProductsContext } from "../context/ProductsContextProvider";

const Products = () => {
	const { products } = useProductsContext();

	return <ProductList products={products} />;
};

export default Products;
