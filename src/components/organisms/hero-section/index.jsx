import React from "react";
import Menu from "../../molecules/menu";
import { StyledHero } from "./styled";
import "../../../index.css";

const HeroElement = () => {
	return (
		<StyledHero id="hero">
			<Menu />
			<div className="hero">
				<div className="hero-left">
					<div className="hero-left-wrapper">
						<h2 className="hero-intro">Hello, my name is</h2>
						<h1 className="hero-name">Jan Peter</h1>
						<div className="hero-title">
							<div className="hero-title-wrapper">
								<div className="hero-title-item">Web Developer</div>
								<div className="hero-title-item">Journalist</div>
								<div className="hero-title-item">Papa</div>
							</div>
						</div>
						<div className="hero-description">
							This is my little portfolio page (still under construction because it is
							not 100% responsive yet). Originally I studied journalism, history and
							media, but finally after some family reasons and the covid-19 pandemic,
							I decided to discover the world of coding last November.
						</div>
					</div>
				</div>
				<div className="hero-right">
					<div className="hero-shape"></div>
					<div className="hero-image"></div>
				</div>
			</div>
		</StyledHero>
	);
};

export default HeroElement;
