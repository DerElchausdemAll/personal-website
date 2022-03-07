import React from "react";
import { StyledContainer } from "./styled";

import { Link } from "react-scroll";

const Menu = () => {
	return (
		<StyledContainer>
			<Link to="hero" spy={true} smooth={true} offset={0} duration={1000}>
				home
			</Link>
			<Link to="project" spy={true} smooth={true} offset={0} duration={1000}>
				project
			</Link>
			<Link to="about" spy={true} smooth={true} offset={0} duration={1000}>
				about
			</Link>
			<Link to="contact" spy={true} smooth={true} offset={0} duration={1000}>
				contact
			</Link>
		</StyledContainer>
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
