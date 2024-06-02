import { useState } from "react";

import Header from "./components/Header";
import UserInput from "./components/UserInput";
import Result from "./components/Result";

const initialUserInput = {
	price: 1000,
	firstPayment: 0,
	term: 2,
	rate: 0,
	loanType: "",
};

function App() {
	const [userInput, setUserInput] = useState(initialUserInput);

	function onChangeHandler(name, value) {
		const onUpdate = (newValue) => {
			setUserInput((prevUserInput) => ({
				...prevUserInput,
				[name]: newValue,
			}));
		};

		if (!isNaN(Number(value))) {
			onUpdate(Number(value));
		} else {
			onUpdate(value);
		}
	}

	return (
		<div className="app">
			<Header className="text-center" />

			<main id="main">
				<UserInput userInput={userInput} onChange={onChangeHandler} />

				<Result userInput={userInput} />
			</main>
		</div>
	);
}

export default App;
