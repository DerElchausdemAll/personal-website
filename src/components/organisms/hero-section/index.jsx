import React, { useEffect, useState } from "react";
import Menu from "../../molecules/menu";
import { StyledHero } from "./styled";

const HeroElement = () => {
	const [offsetY, setOffsetY] = useState(0);
	const handleScroll = () => setOffsetY(window.pageYOffset);

	useEffect(() => {
		window.addEventListener("scroll", handleScroll);

		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	return (
		<StyledHero id="hero">
			<Menu />
			<br />
			<br />
			<br />
			<br />
			<br />
			<br />
			<div style={{ transform: `translateX(-${offsetY * 0.5}px)`, textAlign: "center" }}>
				Huhu
			</div>
			<div
				style={{
					transform: `translateX(${offsetY * 0.5}px)`,
					color: "white",
					textAlign: "center",
				}}
			>
				Huhu
			</div>
			<br />
			<br />
			<br />
			<br />
			<br />
			<br />
			<br />
			<br />
			<br />
			<br />
			<br />
			<br />
			<br />
			<br />
			<br />
			<div
				style={{
					transform: `translateY(-${offsetY * 1.5}px)`,
					borderRadius: "50%",
					height: 100,
					width: 100,
					background: "white",
				}}
			></div>
			<br />
		</StyledHero>
	);
};

export default HeroElement;
