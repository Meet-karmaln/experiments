import { useState, useEffect, useRef } from "react";

const Boxes = () => {
	const [count, setCount] = useState([0, 1, 2, 3, 4, 5, 6, 7, 8]);
	const [randomNum, setRandomNum] = useState(0);
	const randomRef = useRef();

	useEffect(() => {
		const randomNumber = Math.floor(Math.random() * count.length);
		console.log(randomRef.current);
		setRandomNum(randomNumber);
	}, [count]);

	const handleClick = (id) => {
		console.log("got it", count.indexOf(id));
	};

	return (
		<section className='container'>
			{count.map((item) => {
				return item === randomNum ? (
					<div
						key={item}
						onClick={() => handleClick(item)}
						className='box'
					>
						6
					</div>
				) : (
					<div key={item} className='box'></div>
				);
			})}
		</section>
	);
};

export default Boxes;
