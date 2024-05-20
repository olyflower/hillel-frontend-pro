import logo from "./logo.png";

function Header() {
	const headerMenu = ["HOME", "ABOUT", "CONTACTS", "REVIEWS"];

	const makeHeaderMenu = () => {
		return headerMenu.map((item) => (
			<li>
				<a href="#">{item}</a>
			</li>
		));
	};

	return (
		<header className="header">
			<img src={logo} alt="logo" className="header__logo" />

			<ul className="header__list">{makeHeaderMenu()}</ul>

			<div className="login">
				<a href="/login">Log in</a>
				<a href="/signup">Sign up</a>
			</div>
		</header>
	);
}

export default Header;
