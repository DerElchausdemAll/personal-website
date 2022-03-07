import React from "react";
import HeroElement from "./components/organisms/hero-section";
import Project from "./components/organisms/project";
import About from "./components/organisms/about";
import Contact from "./components/organisms/contact";

const App = () => {
	return (
		<div>
			<HeroElement />
			<Project />
			<About />
			<Contact />
		</div>
	);
};

export default App;
