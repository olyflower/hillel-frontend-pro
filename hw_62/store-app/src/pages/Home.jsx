import { Link } from "react-router-dom";

function Home() {
	return (
		<div>
			<h1>Homepage</h1>
			<Link to="./cart">to Cart</Link>
		</div>
	);
}

export default Home;
