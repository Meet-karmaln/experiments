import AirbnbInnerUpper from "./AirbnbInnerUpper";
import AirbnbInnerLower from "./AirbnbInnerLower";
import { useRef } from "react";

const AirbnbInnerNav = ({ setShowInnerNav }) => {
	const modelRef = useRef(null);

	const handleClose = (event) => {
		if (!modelRef.current.contains(event.target)) {
			setShowInnerNav(false);
		}
	};

	return (
		<article className='wraper' onMouseUp={(event) => handleClose(event)}>
			<header className='main-innerContainer' ref={modelRef}>
				<AirbnbInnerUpper />
				<AirbnbInnerLower />
			</header>
		</article>
	);
};

export default AirbnbInnerNav;
