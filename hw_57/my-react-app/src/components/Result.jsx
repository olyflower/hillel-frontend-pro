import React from "react";
import Table from "../UI/Table";
import loanCalculatorService from "../service/LoanCalculator.service";

const COL_DESC = {
	month: "Місяць",
	loanBody: "Заборгованість за кредитом, грн",
	monthlyPayment: "Погашення кредиту, грн",
	loanInterest: "Відсотки за кредитом, %",
	summaryMonthlyPayment: "Виплата в місяць, грн",
};

const COLUMN_ORDER = [
	"month",
	"loanBody",
	"monthlyPayment",
	"loanInterest",
	"summaryMonthlyPayment",
];

const Result = ({ userInput }) => {
	if (!userInput) {
		return <div>No user input provided</div>;
	}

	const schedule = loanCalculatorService.getSchedule({
		loanType: userInput.loanType,
		creditSum: userInput.price,
		interestRateYear: userInput.rate,
		interestRateMonth: userInput.rate / 100 / 12,
		creditPeriod: userInput.term,
	});

	if (!schedule || schedule.length === 0) {
		return <div>No schedule data available</div>;
	}

	const thead = COLUMN_ORDER.map((col, index) => (
		<th key={index}>{COL_DESC[col]}</th>
	));

	return (
		<div className="result-container">
			<Table id="result" thead={thead}>
				{schedule.map((row, rowIndex) => (
					<tr key={rowIndex}>
						{COLUMN_ORDER.map((col, colIndex) => (
							<td key={colIndex}>{row[col]}</td>
						))}
					</tr>
				))}
			</Table>
		</div>
	);
};

export default Result;
