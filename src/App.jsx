import { useState } from "react";

import "./App.css";
import bootstrap from "../node_modules/bootstrap/dist/css/bootstrap.min.css";
function App() {
	const [count, setCount] = useState(0);
	const inc = () => {
		setCount(count + 1);
	};
	const dec = () => {
		if (count > 0) {
			setCount(count - 1);
		} else {
			alert("cannot go negative");
		}
	};
	const neu = () => {
		setCount(0);
	};
	return (
		<>
			<h1>React Counter</h1>
			<h1 className="mt-5">{count}</h1>
			<div className="mt-5">
				<button
					onClick={inc}
					className="ml-5 btn btn-block btn-lg btn-outline-success"
				>
					Increment
				</button>{" "}
				{"  "}
				<button
					onClick={dec}
					className="ml-5 btn btn-block btn-lg btn-outline-danger"
				>
					decrement
				</button>
				{"  "}
				<button
					onClick={neu}
					className="ml-5 neu  btn btn-block btn-lg btn-outline-primary"
				>
					Neutral
				</button>
				{"  "}
			</div>
		</>
	);
}

export default App;
