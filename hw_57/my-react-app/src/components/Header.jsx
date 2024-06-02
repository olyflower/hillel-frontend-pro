import reactLogo from "../assets/react.svg";
import classes from "./Header.module.css";

const Header = (props) => {
	return (
		<header className={`${classes.header} ${props.className}`}>
			<img src={reactLogo} alt="reactLogo" className={classes.img} />
			<h1 className={classes.title}>Кредитний калькулятор</h1>
		</header>
	);
};

export default Header;
