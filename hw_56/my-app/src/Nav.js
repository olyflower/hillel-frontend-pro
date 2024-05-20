function Nav() {
	
	const menuPrice = [
		{ name: "Espresso", price: "$3" },
		{ name: "Cappuccino", price: "$4" },
		{ name: "Latte", price: "$5" },
		{ name: "Americano", price: "$2" },
	];

	const makeMenu = () => {
		return menuPrice.map((item) => (
			<li>
				{item.name} - {item.price}
				<button className="button">Buy</button>
			</li>
		));
	};

	return (
		<nav className="nav">
			<ul className="nav__menu">
				<li>
					<a>Menu</a>
					<ul>{menuPrice.length>0 && makeMenu()}</ul>
				</li>
				<li>
					<a href="#">Recipes</a>
				</li>
			</ul>
		</nav>
	);
}

export default Nav;
