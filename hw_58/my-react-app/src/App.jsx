import { useState } from "react";
import img1 from "./assets/img1.png";
import img2 from "./assets/img2.png";
import img3 from "./assets/img3.png";
import img4 from "./assets/img4.png";
import img5 from "./assets/img5.png";
import img6 from "./assets/img6.png";
import img7 from "./assets/img7.png";

import "./App.css";

function App() {
	const [counts, setCounts] = useState({
		img1: 0,
		img2: 0,
		img3: 0,
		img4: 0,
		img5: 0,
		img6: 0,
		img7: 0,
	});
	const [click, setClick] = useState([]);
	const [winner, setWinner] = useState(null);

	const images = { img1, img2, img3, img4, img5, img6, img7 };

	function countHandler(img) {
		setCounts((prevCounts) => ({
			...prevCounts,
			[img]: prevCounts[img] + 1,
		}));
		if (!click.includes(img)) {
			setClick((prevClick) => [...prevClick, img]);
		}
	}

	function resultHandler() {
		const maxCount = Math.max(...Object.values(counts));
		const winners = click.filter((img) => counts[img] === maxCount);

		console.log(winners);

		const winnerImg = winners[0];

		setWinner(images[winnerImg]);
	}

	return (
		<div className="container">
			<div className="images">
				<div className="images__item">
					<img
						src={img1}
						className="img"
						onClick={() => countHandler("img1")}
					/>

					<div>{counts.img1}</div>
				</div>
				<div className="images__item">
					<img
						src={img2}
						className="img"
						onClick={() => countHandler("img2")}
					/>

					<div>{counts.img2}</div>
				</div>
				<div className="images__item">
					<img
						src={img3}
						className="img"
						onClick={() => countHandler("img3")}
					/>

					<div>{counts.img3}</div>
				</div>
				<div className="images__item">
					<img
						src={img4}
						className="img"
						onClick={() => countHandler("img4")}
					/>

					<div>{counts.img4}</div>
				</div>
				<div className="images__item">
					<img
						src={img5}
						className="img"
						onClick={() => countHandler("img5")}
					/>

					<div>{counts.img5}</div>
				</div>
				<div className="images__item">
					<img
						src={img6}
						className="img"
						onClick={() => countHandler("img6")}
					/>

					<div>{counts.img6}</div>
				</div>
				<div className="images__item">
					<img
						src={img7}
						className="img"
						onClick={() => countHandler("img7")}
					/>

					<div>{counts.img7}</div>
				</div>
			</div>

			<button onClick={resultHandler} className="button">
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
