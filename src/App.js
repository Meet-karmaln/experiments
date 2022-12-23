// import { Suspense, lazy } from "react";
// import { BrowserRouter, Routes, Route } from "react-router-dom";

// import LazyOne from "./Lazy-Components/L";

// const LazyTwo = lazy(() => import("./Lazy-Components/A"));
// const LazyThree = lazy(() => import("./Lazy-Components/Z"));
// const LazyFour = lazy(() => import("./Lazy-Components/Y"));
// import Child from "./Child";
// import CurvedLine from "./CurvedLine/CurvedLine";
// import Scroll from "./onScroll Animation/Scroll";
// import AnimateOnHover from "./animateOnHover/AnimateOnHover";
// import Material from "./Material/Material";
import Boxes from "./logical/Boxes";
// import OnPressAnimation from "./onPressAnimation/OnPressAnimation";

function App() {
	return <Boxes />;
}
export default App;

// <BrowserRouter>
// 	<Suspense fallback={<h6>LOADING....</h6>}>
// 		<Routes>

// 			<Route path='/' element={<LazyOne />} />
// 			<Route path='a' element={<LazyTwo />} />
// 			<Route path='z' element={<LazyThree />} />
// 			<Route path='y' element={<LazyFour />} />
// 		</Routes>
// 	</Suspense>
// </BrowserRouter>
