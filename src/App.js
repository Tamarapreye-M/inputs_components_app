// import { type } from "@testing-library/user-event/dist/type";
import React from "react";
import "./App.css";
import Input from "./components/Input";
import Form from "./components/Form";

const props = [
	{ default: true },
	{ error: true },
	{ disabled: true },
	{ helperText: "Some interesting text" },
	{ helperText: "Some interesting text", error: true },
	{ startIcon: true },
	{ endIcon: true },
	{ fullWidth: true },
	{ size: "small" },
	{ size: "medium" },
];

const pass = props.map((prop) => {
	let keys = Object.keys(prop);
	let vals = Object.values(prop);
	return (
		<>
			<Input
				key={keys}
				name={keys[0]}
				value={vals[0]}
				type={vals.length > 1 && "helperError"}
			/>
		</>
	);
});

const App = () => {
	return (
		<div className="container">
			<div>{pass}</div>
			<Form />
		</div>
	);
};

export default App;
