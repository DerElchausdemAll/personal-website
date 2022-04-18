import React from "react";
import ArrowBackIosNewSharpIcon from "@mui/icons-material/ArrowBackIosNewSharp";
import { Link } from "react-scroll";

const BackToMenu = () => {
	return (
		<div className="back-to-menu">
			<Link to="hero" spy={true} smooth={true} offset={0} duration={1000}>
				<ArrowBackIosNewSharpIcon
					style={{
						transform: "rotate(90deg)",
						fontSize: "50px",
						color: "black",
					}}
				/>
			</Link>
		</div>
	);
};

export default BackToMenu;
