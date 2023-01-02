import { useState } from "react";
import AirbnbInnerNav from "./AirbnbInnerNav";
import AirbnbOutterNav from "./AirbnbOutterNav";

const AirbnbNav = () => {
	const [showInnerNav, setShowInnerNav] = useState(false);

	return (
		<>
			{!showInnerNav ? (
				<AirbnbOutterNav setShowInnerNav={setShowInnerNav} />
			) : (
				<AirbnbInnerNav setShowInnerNav={setShowInnerNav} />
			)}
		</>
	);
};

export default AirbnbNav;
