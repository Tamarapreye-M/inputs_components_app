import React from "react";

const Input = (props) => {
	const { name, type, value } = props;
	const formClass = `form ${(name === "error" || type) && "errorText"}`;
	return (
		<div className="wrapper">
			<h2>
				{name === "size" && value} {name} {type && "with an error"}
			</h2>

			<div className={formClass}>
				<label htmlFor="">Label</label>
				<br />
				<input
					type="text"
					placeholder="Placeholder"
					className={type || name}
					disabled={name == "disabled" && value}
				/>
				{name === "helperText" && <p>{value}</p>}
			</div>
		</div>
	);
};

export default Input;
