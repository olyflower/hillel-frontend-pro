const Card = (props) => {
	let className = 'card card-shadow'
	if (props.className) {
		className = `${className} ${props.className}`;
	}
	return <div className={className}>{props.children}</div>;
};

export default Card;
