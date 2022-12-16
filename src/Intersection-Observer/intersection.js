import { useEffect, useRef } from "react";
import { data } from "./Intersection-Observer/data";

const intersection = () => {
	const elementRef = useRef(null);

	useEffect(() => {
		const observer = new IntersectionObserver((entries) => {
			entries.forEach((entry) => {
				entry.target.classList.toggle("show", entry.isIntersecting);
			});
		});
		const target = elementRef.current;
		console.log(target);
		if (target) {
			observer.observe(target);
		}

		return () => {
			if (target) {
				observer.unobserve(target);
			}
		};
	}, [elementRef]);

	return (
		<div className='App'>
			{data.map((item, index) => {
				return (
					<h1 ref={elementRef} key={index} className='item'>
						{item}
					</h1>
				);
			})}
		</div>
	);
};

export default intersection;
