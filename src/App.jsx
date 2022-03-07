import React, { useState, useEffect } from "react";
import HeroElement from "./components/organisms/hero-section";
import Project from "./components/organisms/project";
import About from "./components/organisms/about";
import Contact from "./components/organisms/contact";
import { StyledContainer } from "./styled";

const App = () => {
	const [offsetY, setOffsetY] = useState(0);
	const handleScroll = () => setOffsetY(window.pageYOffset);

	useEffect(() => {
		window.addEventListener("scroll", handleScroll);

		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	return (
		<StyledContainer>
			<section>
				<HeroElement />
			</section>
			<section>
				<Project />
			</section>
			<section>
				<About />
			</section>
			<section>
				<Contact />
			</section>
		</StyledContainer>
	);
};

export default App;
