import React from "react";
import { Link } from "react-scroll";
import "../../../index.css";

const Menu = () => {
	return (
		<div className="header">
			<div className="header-logo"></div>
			<div className="header-wrapper">
				<div>
					<div className="header-menu">
						<Link
							className="menu-links"
							to="https://personal-website-five-pied.vercel.app"
							spy={true}
							smooth={true}
							offset={0}
							duration={1000}
							style={{ cursor: "pointer" }}
						>
							home
						</Link>
						<Link
							className="menu-links"
							to="project"
							spy={true}
							smooth={true}
							offset={0}
							duration={1000}
							style={{ cursor: "pointer" }}
						>
							projects
						</Link>
						<Link
							className="menu-links"
							to="about"
							spy={true}
							smooth={true}
							offset={0}
							duration={1000}
							style={{ cursor: "pointer" }}
						>
							about me
						</Link>
						<Link
							className="menu-links"
							to="contact"
							spy={true}
							smooth={true}
							offset={0}
							duration={1000}
							style={{ cursor: "pointer" }}
						>
							contact
						</Link>
					</div>
					<hr className="hr" />
				</div>
			</div>
		</div>
	);
};

export default Menu;
