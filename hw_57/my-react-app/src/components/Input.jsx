const Input = ({ className, label, ...props }) => {
	return (
		<div className={`input-group ${className || ""}`}>
			<input className="form__field" {...props} />
			<label className="form__label">{label}</label>
		</div>
	);
};

export default Input;
