import Card from "../UI/Card";
import Input from "./Input";
import SelectInput from "./SelectInput";

const UserInput = ({ userInput, ...props }) => {
	const onChangeHandler = (event) => {
		const { name, value } = event.target;
		props.onChange(name, value);
	};

	return (
		<Card className="credit-calculator text-center flex-column-center">
			<Input
				className="w-35"
				label="Ціна (грн)"
				type="number"
				name="price"
				placeholder="Ціна (грн)"
				onChange={onChangeHandler}
				value={userInput.price}
			/>
			<Input
				className="w-35"
				label="Перший внесок(грн)"
				type="number"
				name="firstPayment"
				placeholder="Перший внесок"
				onChange={onChangeHandler}
				value={userInput.firstPayment}
			/>
			<Input
				className="w-35"
				label="Строк кредитування"
				type="number"
				name="term"
				placeholder="Строк кредитування"
				onChange={onChangeHandler}
				value={userInput.term}
			/>
			<Input
				className="w-35"
				label="Відсоткова ставка за кредитом(%)"
				type="number"
				name="rate"
				placeholder="Відсоткова ставка за кредитом(%)"
				onChange={onChangeHandler}
				value={userInput.rate}
			/>

			<SelectInput
				className="w-35"
				name="loanType"
				options={[
					{ value: "", label: "Тип кредита" },
					{ value: "annuitet", label: "Ануїтет" },
					{ value: "classic", label: "Класика" },
				]}
				onChange={onChangeHandler}
				value={userInput.loanType}
			/>
		</Card>
	);
};

export default UserInput;
