import { useRef, useState, useEffect } from "react";

const Child = () => {
	const [name, setName] = useState("");
	const prevName = useRef("");

	const handleName = (e) => {
		setName(e.target.value);
	};

	useEffect(() => {
		prevName.current = name;
	}, [name]);

	return (
		<div>
			<input type='text' onChange={handleName} value={name} />
			<h4>
				I am {name} and I was {prevName.current}
			</h4>
		</div>
	);
};

export default Child;
