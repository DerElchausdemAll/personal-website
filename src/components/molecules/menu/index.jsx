import React from "react";

const Menu = () => {
	return (
		<div>
			<a href="#menu">Home</a>
			<a href="#project">project</a>
			<a href="#about">about</a>
			<a href="#contact">contact</a>
		</div>
	);
};

export default Menu;

// import React from "react";
// import { Routes, Route, Link } from "react-router-dom";
// import Project from "../../organisms/project";
// import HeroElement from "../../organisms/hero-section";

// const Menu = () => {
// 	return (
// 		<div>
// 			<Routes>
// 				{/* <a href="#">Home</a>
// 				<a href="#project">project</a>
// 				<a href="#">about</a>
// 				<a href="#">contact</a> */}
// 				<div>Test</div>
// 				<Route path="/" element={<HeroElement />} />
// 				<Route path="project" element={<Project />} />
// 			</Routes>
// 		</div>
// 	);
// };

// export default Menu;
