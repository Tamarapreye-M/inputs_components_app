import React, { useState } from "react";

const Form = () => {
	const [fullName, setFullName] = useState("");
	return (
		<div>
			<form>
				<div className="form-control">
					<input type="text" placeholder="full name" name="fullName" />
				</div>
				<div className="form-control">
					<input type="email" placeholder="email" name="email" />
				</div>
				<div className="form-control">
					<input type="password" placeholder="password" name="password" />
				</div>
				<div className="form-control">
					<input
						type="password"
						placeholder="confirm password"
						name="confirmPassword"
					/>
				</div>
			</form>
		</div>
	);
};

export default Form;
