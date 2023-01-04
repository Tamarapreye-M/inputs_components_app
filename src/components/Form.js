import React, { useState } from "react";

const Form = () => {
	// const [fullName, setFullName] = useState("");
	// const email = "";

	const initialFormValues = {
		fullName: "",
		email: "",
		password: "",
		confirmPassword: "",
		gender: "",
		languages: [],
	};

	const [form, setFormValues] = useState(initialFormValues);
	const { fullName, email, password, confirmPassword, gender, languages } =
		form;
	const showValues = (ev) => {
		const { name, value } = ev.target;
		return setFormValues((prev) => ({ ...prev, [name]: value }));
	};

	// const showFullName = (ev) => {
	// 	const { value } = ev.target;
	// 	setFullName(value);
	// };
	return (
		<div>
			<form>
				<div className="form-control">
					<input
						type="text"
						placeholder="full name"
						name={"fullName"}
						onChange={showValues}
					/>
					<h3>Your full name is {fullName}</h3>
				</div>
				<div className="form-control">
					<input
						type="email"
						placeholder="email"
						name={"email"}
						onChange={showValues}
					/>
					<h3>Your email is {email}</h3>
				</div>
				<div className="form-control">
					<input
						type="password"
						placeholder="password"
						name={"password"}
						onChange={showValues}
					/>
					<div className="password-icons">
						<span class="material-symbols-outlined">visibility</span>
						<span class="material-symbols-outlined">visibility_off</span>
					</div>
					<h3>Your password is {password}</h3>
				</div>
				<div className="form-control">
					<input
						type="password"
						placeholder="confirm password"
						name="confirmPassword"
					/>
				</div>
				<div className="form-control">
					<input
						type="radio"
						id="male"
						name="gender"
						value={"male"}
						onChange={showValues}
					/>
					<label htmlFor="male">Male</label>
				</div>
				<div className="form-control">
					<input
						type="radio"
						id="female"
						name="gender"
						value={"female"}
						onChange={showValues}
					/>
					<label htmlFor="female">Female</label>
					<h3>Your gender is {gender}</h3>
				</div>
				<div className="form-control">
					<input
						type="checkbox"
						id="javascript"
						name="languages"
						value={"javascript"}
						onChange={showValues}
					/>
					<label htmlFor="language">Javascript</label>
				</div>
				<div className="form-control">
					<input
						type="checkbox"
						id="php"
						name="languages"
						value={"php"}
						onChange={showValues}
					/>
					<label htmlFor="language">php</label>
				</div>
				<div className="form-control">
					<input
						type="checkbox"
						id="python"
						name="languages"
						value={"python"}
						onChange={showValues}
					/>
					<label htmlFor="language">python</label>
				</div>
				<div className="form-control">
					<input
						type="checkbox"
						id="c+"
						name="languages"
						value={"c+"}
						onChange={showValues}
						// onSelect={showValues}
					/>
					<label htmlFor="language">c+</label>
				</div>
			</form>
		</div>
	);
};

export default Form;
