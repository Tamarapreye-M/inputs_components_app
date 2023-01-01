import React from "react";
import PropTypes from "prop-types";

const Input = (props) => {
	console.log(props);
	let { name, type, value } = props;
	return (
		<div className="wrapper">
			<h2>
				{name} {type && "with an error"}
			</h2>
			<input type="text" placeholder="placeholder" className={type || name} />
			{name === "helperText" && (
				<p className={type === "helperError" && "errorText"}>{value}</p>
			)}
		</div>
	);
};

Input.propTypes = {};

export default Input;
