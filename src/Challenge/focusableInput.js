import { useEffect, useRef } from "react";

const focusableInput = (props) => {
	const inputRef = useRef(null);

	useEffect(() => {
		if (focusAble) {
			inputRef.current.focus();
		} else {
			console.log(inputRef.current);
		}
	}, [focusAble]);

	return (
		<>
			<input ref={inputRef} />
		</>
	);
};

export default focusableInput;
