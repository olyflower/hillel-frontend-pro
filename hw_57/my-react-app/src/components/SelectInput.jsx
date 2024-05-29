const SelectInput = ({ className, label, options, ...props }) => {
	return (
		<div className={`input-group ${className || ""}`}>
			<select className="form__field" {...props}>
				{options.map((option) => (
					<option key={option.value} value={option.value}>
						{option.label}
					</option>
				))}
			</select>
			<label className="form__label">{label}</label>
		</div>
	);
};

export default SelectInput;
