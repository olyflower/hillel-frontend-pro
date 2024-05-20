import Header from "./Header";
import Nav from "./Nav";
import Content from "./Content";
import "./App.css";

function App() {
	return (
		<div className="container">
			<Header />
			<div className="container__content">
				<Nav />
				<Content />
			</div>
		</div>
	);
}

export default App;
