import "./Content.css";
import coffee from "./coffee.jpg";
import coffee1 from "./coffee1.jpg";

function Content() {
	return (
		<section className="container__content">
			<img src={coffee1} alt="coffee" className="img2" />
			<button className="button">Learn more...</button>
			<img src={coffee} alt="coffee" className="img1" />
		</section>
	);
}

export default Content;
