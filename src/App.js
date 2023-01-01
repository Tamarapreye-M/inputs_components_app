import { type } from "@testing-library/user-event/dist/type";
import React from "react";
import "./App.css";
import Input from "./components/Input";

const props = [
	{ default: "" },
	{ error: true },
	{ disabled: true },
	{ helperText: "Some interesting text" },
	{ helperText: "Some interesting text", error: true },
	{ startIcon: true },
	{ endIcon: true },
	{ fullWidth: true },
];

const pass = props.map((prop) => {
	let keys = Object.keys(prop);
	console.log(keys);
	return (
		<Input
			key={keys}
			name={keys[0]}
			value={keys[0] == "helperText" ? Object.values(prop)[0] : null}
			type={Object.values(prop).length > 1 && "helperError"}
		/>
	);
});

const App = () => {
	return (
		<div className="container">
			<div>{pass}</div>
		</div>
	);
};

export default App;
