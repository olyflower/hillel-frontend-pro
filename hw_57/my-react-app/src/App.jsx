import { useState } from "react";
import reactLogo from "./assets/react.svg";
import loanCalculatorService from "./service/LoanCalculator.service";

const initialUserInput = {
	price: 1000,
	firstPayment: 0,
	term: 2,
	rate: 0,
	loanType: "",
};

function App() {
	const [userInput, setUserInput] = useState(initialUserInput);

	function onChangeHandler(event) {
		const { name, value } = event.target;

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

	const schedule = loanCalculatorService.getSchedule({
		loanType: userInput.loanType,
		creditSum: userInput.price,
		interestRateYear: userInput.rate,
		interestRateMonth: userInput.rate / 100 / 12,
		creditPeriod: userInput.term,
	});

	return (
		<div className="app">
			<header className="header text-center">
				<img src={reactLogo} alt="reactLogo" />
				<h1 className="title">Кредитний калькулятор</h1>
			</header>

			<main id="main">
				<div className="card card-shadow credit-calculator text-center flex-column-center">
					<div className="w-35 input-group">
						<input
							type="number"
							className="form__field"
							name="price"
							placeholder="Ціна (грн)"
							onChange={onChangeHandler}
							value={userInput.price}
						/>
						<label className="form__label">Ціна (грн)</label>
					</div>

					<div className="w-35 input-group">
						<input
							type="number"
							className="form__field"
							name="firstPayment"
							placeholder="Перший внесок"
							onChange={onChangeHandler}
							value={userInput.firstPayment}
						/>
						<label className="form__label">
							Перший внесок(грн)
						</label>
					</div>

					<div className="w-35 input-group">
						<input
							type="number"
							className="form__field"
							name="term"
							placeholder="Строк кредитування"
							onBlur={onChangeHandler}
							defaultValue={userInput.term}
						/>
						<label className="form__label">
							Строк кредитування
						</label>
					</div>

					<div className="w-35 input-group">
						<input
							type="number"
							className="form__field"
							name="rate"
							placeholder="Відсоткова ставка за кредитом(%)"
							onChange={onChangeHandler}
							value={userInput.rate}
						/>
						<label className="form__label">
							Відсоткова ставка за кредитом(%)
						</label>
					</div>

					<div className="w-35 input-group">
						<select
							name="loanType"
							onChange={onChangeHandler}
							value={userInput.loanType}
						>
							<option value="">Тип кредита</option>
							<option value="annuitet">Ануїтет</option>
							<option value="classic">Класика</option>
						</select>
					</div>
				</div>

				{JSON.stringify(userInput)}

				{JSON.stringify(schedule)}

				<div className="result-container">
					<table id="result">
						<thead>
							<tr>
								<th>Місяць</th>
								<th>Заборгованість за кредитом, грн </th>
								<th>Погашення кредиту, грн </th>
								<th>Відсотки за кредитом </th>
								<th>Виплата в місяць, грн</th>
							</tr>
						</thead>
						<tbody></tbody>
					</table>
				</div>
			</main>
		</div>
	);
}

export default App;
