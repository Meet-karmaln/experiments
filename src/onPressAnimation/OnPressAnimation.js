import { useRef } from "react";

const OnPressAnimation = () => {
	const pressRef = useRef(null);

	const handlePress = () => {
		pressRef.current.style.transform = "scale(0.9)";
	};

	const handleRelease = () => {
		pressRef.current.style.transform = "scale(1)";
	};

	const handleHover = () => {
		pressRef.current.style.transform = "scale(1.1)";
	};

	return (
		<button
			ref={pressRef}
			onMouseDown={handlePress}
			onMouseUp={handleRelease}
			onMouseEnter={handleHover}
			onMouseLeave={handleRelease}
			className='pressIcon'
		></button>
	);
};

export default OnPressAnimation;
