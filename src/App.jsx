import React, { useCallback } from "react";
import HeroElement from "./components/organisms/hero-section";
import Project from "./components/organisms/project";
import About from "./components/organisms/about";
import Contact from "./components/organisms/contact";
import { useInView } from "react-intersection-observer";

// const { ref: backgroundRef, inView: backgroundGlobalRef } = useInView();

// const App = () => {
// 	const [ref: inViewRef, inView: backgroundGlobalRef] = useInView();

// 	// Use `useCallback` so we don't recreate the function on each render - Could result in infinite loop
// 	const setRefs = useCallback(
// 		node => {
// 			// Ref's from useRef needs to have the node assigned to `current`
// 			ref.current = node;
// 			// Callback refs, like the one from `useInView`, is a function that takes the node as an argument
// 			inViewRef(node);
// 		},
// 		[inViewRef]
// 	);

// 	return (
// 		<div className={`${backgroundGlobalRef ? "changeGlobal" : "global"}`}>
// 			<HeroElement />
// 			<Project setRefs={setRefs} />
// 			<About />
// 			<Contact setRefs={setRefs} />
// 		</div>
// 	);
// };

// export default App;

const App = () => {
	const { ref: backgroundRef, inView: backgroundGlobalRef } = useInView();
	const { ref: test, inView: two } = useInView();

	return (
		<div className={`${backgroundGlobalRef || two ? "changeGlobal" : "global"}`}>
			<HeroElement />
			<Project backgroundRef={backgroundRef} />
			<About test={test} />
			<Contact />
			{/* <Contact test={test} /> */}
		</div>
	);
};

export default App;
