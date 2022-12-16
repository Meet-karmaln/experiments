import { useState, useEffect } from "react";

const Scroll = () => {
	const [scroll, setscroll] = useState(0);

	useEffect(() => {
		const handleScroll = () => {
			setscroll(window.scrollY);
		};
		window.addEventListener("scroll", handleScroll);

		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	const style = {
		opacity: 1 - scroll / 350,
		transform: `translateX(${scroll / 5}vw)`,
	};
	console.log(scroll);
	return (
		<div className='scrollView'>
			<h1>Scroll</h1>
			<div className='cover'>
				<div className='components' style={style}></div>
			</div>
		</div>
	);
};

export default Scroll;
