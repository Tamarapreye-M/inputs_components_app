// import { type } from "@testing-library/user-event/dist/type";
import React from "react";
import "./App.css";
import Input from "./components/Input";
import Form from "./components/Form";

const props = [
	{ name: "default", key: "a" },
	{ name: "error", key: "b" },
	{ name: "disabled", key: "c" },
	{ name: "helperText", value: "Some interesting text", key: "d" },
	{
		name: "helperText",
		value: "Some interesting text",
		type: "helperError",
		key: "e",
	},
	{ name: "startIcon", key: "f" },
	{ name: "endIcon", key: "g" },
	{ name: "fullWidth", key: "h" },
	{ name: "size", value: "small", key: "i" },
	{ name: "size", value: "medium", key: "j" },
	{ name: "size", value: "large", key: "k" },
	{ name: "value", value: "text", key: "l" },
	{ name: "rows", value: "4", type: "multiline", key: "m" },
];

const pass = props.map((prop) => {
	// console.log(prop.name);
	let result = <Input key={prop.key} {...prop} />;
	return result;
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
