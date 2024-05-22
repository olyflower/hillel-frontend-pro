class LoanCalculator {
	paymentScheduleAnnuitet({
		creditSum,
		interestRateYear,
		interestRateMonth,
		creditPeriod,
	}) {
		const payment =
			creditSum *
			(interestRateMonth /
				(1 - Math.pow(1 + interestRateMonth, -creditPeriod)));
		let loanBody = creditSum;

		return Array(creditPeriod)
			.fill(null)
			.map((_, index) => {
				const percent = (loanBody * (interestRateYear / 100)) / 12;
				loanBody -= payment - percent;

				return {
					month: index + 1,
					monthlyPayment: payment - percent,
					loanInterest: percent,
					summaryMonthlyPayment: payment,
					loanBody: Math.abs(loanBody.toFixed(2)),
				};
			});
	}

	paymentScheduleClassic({ creditSum, interestRateMonth, creditPeriod }) {
		const payment = creditSum / creditPeriod;
		let totalCreditSum = creditSum;

		return Array(creditPeriod)
			.fill(null)
			.map((_, index) => {
				const percent = totalCreditSum * interestRateMonth;
				totalCreditSum -= payment;

				return {
					month: index + 1,
					monthlyPayment: payment,
					loanInterest: percent,
					summaryMonthlyPayment: payment + percent,
					loanBody: Math.abs(totalCreditSum.toFixed(2)),
				};
			});
	}
}

export default new LoanCalculator();
