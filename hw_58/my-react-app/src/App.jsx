import { useState } from "react";
import images from "./assets/images";
import "./App.css";

function App() {
	const initialCounts = images.map((_, idx) => ({
		name: `img${idx + 1}`,
		count: 0,
		time: null,
	}));

	const [counts, setCounts] = useState(initialCounts);
	const [winner, setWinner] = useState(null);

	function countHandler(name) {
		setCounts((prevCounts) =>
			prevCounts.map((item) =>
				item.name === name
					? { ...item, count: item.count + 1, time: Date.now() }
					: item
			)
		);
	}

	function findWinnerImg() {
		const maxCount = Math.max(...counts.map((item) => item.count));
		const winners = counts.filter((item) => item.count === maxCount);
		const minTime = Math.min(...winners.map((item) => item.time));
		const winner = winners.find((item) => item.time === minTime);
		return images.find((img) => img.includes(winner.name));
	}

	function onClickHandler() {
		const winnerImg = findWinnerImg();
		setWinner(winnerImg);
	}

	return (
		<div className="container">
			<div className="images">
				{counts.map((item, idx) => (
					<div key={item.name} className="images__item">
						<img
							src={images[idx]}
							className="img"
							onClick={() => countHandler(item.name)}
						/>
						<div>{item.count} </div>
					</div>
				))}
			</div>

			<button onClick={onClickHandler} className="button">
				Show Results
			</button>

			{winner && (
				<div className="winner">
					<div>Winner!</div>
					<img src={winner} className="img" />
				</div>
			)}
		</div>
	);
}

export default App;
