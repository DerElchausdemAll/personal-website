import React from "react";
import Menu from "../../molecules/menu";
import { StyledHero } from "./styled";

const HeroElement = () => {
	return (
		<StyledHero>
			<Menu id="menu" />
		</StyledHero>
	);
};

export default HeroElement;
