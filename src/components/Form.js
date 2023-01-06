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
		const { name, value, checked } = ev.target;
		if (Array.isArray(form[name])) {
			let arr = [...form[name]];
			if (checked) {
				arr.push(value);
			} else {
				arr = arr.filter((each) => each !== value);
			}
			setFormValues((prev) => ({ ...prev, [name]: arr }));
		} else {
			return setFormValues((prev) => ({ ...prev, [name]: value }));
		}
	};

	const [showPassword, setShowPassword] = useState(false);

	const handlePassword = () => {
		setShowPassword((prev) => !prev);
	};

	return (
		<div>
			<form>
				<div className="form-control">
					<label htmlFor="fullname">Enter your full name</label>
					<br />
					<input
						type="text"
						placeholder="full name"
						name={"fullName"}
						onChange={showValues}
						rows="4"
					/>

					<h3>Your full name is {fullName}</h3>
					<textarea name="message" id="" cols="30" rows="4"></textarea>
				</div>
				<div className="form-control">
					<label htmlFor="email">Enter your email</label>
					<br />
					<input
						type="email"
						placeholder="email"
						name={"email"}
						onChange={showValues}
					/>
					<h3>Your email is {email}</h3>
				</div>
				<div className="form-control" id="password-input">
					<label htmlFor="password">Enter your password</label>
					<br />
					<input
						type={showPassword ? "text" : "password"}
						placeholder="password"
						name={"password"}
						onChange={showValues}
					/>

					{!showPassword ? (
						<span
							onClick={handlePassword}
							className="material-symbols-outlined password-icons"
						>
							visibility
						</span>
					) : (
						<span
							onClick={handlePassword}
							className="material-symbols-outlined password-icons"
						>
							visibility_off
						</span>
					)}

					<h3>Your password is {password}</h3>
				</div>
				<div className="form-control">
					<label htmlFor="confirmPassword">Confirm your Password</label>
					<br />
					<input
						type="password"
						placeholder="confirm password"
						name="confirmPassword"
					/>
				</div>
				<p>What is your gender?</p>
				<div className="form-control">
					<input
						type="radio"
						id="male"
						name="gender"
						value={"Male"}
						onChange={showValues}
					/>
					<label htmlFor="male">Male</label>
				</div>
				<div className="form-control">
					<input
						type="radio"
						id="female"
						name="gender"
						value={"Female"}
						onChange={showValues}
					/>
					<label htmlFor="female">Female</label>
				</div>
				<div className="form-control">
					<input
						type="radio"
						id="non-binary"
						name="gender"
						value={"Non-binary"}
						onChange={showValues}
					/>
					<label htmlFor="non-binary">Non-binary</label>
				</div>
				<h3>Your gender is {gender}</h3>
				{/* checkboxes */}
				<p>What languages do you use?</p>
				<div className="form-control">
					<input
						type="checkbox"
						id="javascript"
						name="languages"
						value={"javascript"}
						onChange={showValues}
						checked={form.languages.indexOf("javascript") !== -1}
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
						checked={form.languages.indexOf("php") !== -1}
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
						checked={form.languages.indexOf("python") !== -1}
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
						checked={form.languages.indexOf("c+") !== -1}
						// onSelect={showValues}
					/>
					<label htmlFor="language">c+</label>
					<h3>
						{languages.length > 1
							? // `Your languages are ${languages.reduce((acc, curr, i, ar) =>
							  // 		i !== ar.length - 1
							  // 			? `${acc}${ar.length > 2 && ","} ${curr}`
							  // 			: `${acc} and ${curr}`
							  //   )}`
							  `
							  Your languages are 
							  ${languages.slice(0, -1).join(", ")} 
							  and ${languages.slice(-1).join("")}
							  `
							: `Your language is ${languages.join("")}`}
					</h3>
				</div>
			</form>
		</div>
	);
};

export default Form;
