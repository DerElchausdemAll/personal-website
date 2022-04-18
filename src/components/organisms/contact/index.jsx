import React from "react";
import { StyledContact } from "./styled";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import BackToMenu from "../../../components/ions/backToMenu";

import Link from "@mui/material/Link";

const Contact = ({ test }) => {
	return (
		<StyledContact id="contact">
			<div className="c" ref={test}>
				<div className="c-wrapper">
					<div className="c-contact">
						<div>
							<h2 className="c-title">Contact me</h2>
							<form
								action="https://formsubmit.co/peter.jan@mail.de"
								method="POST"
								className="c-form"
							>
								<TextField
									required
									fullWidth
									type="text"
									name="name"
									label="Name"
									variant="outlined"
									size="large"
									sx={{ marginTop: "50px" }}
								/>
								<TextField
									required
									fullWidth
									type="email"
									name="email"
									label="E-Mail"
									variant="outlined"
									color="primary"
									sx={{ marginTop: "50px" }}
								/>
								<TextField
									required
									fullWidth
									type="text"
									name="message"
									label="Message"
									variant="outlined"
									color="primary"
									multiline
									rows={10}
									sx={{ marginTop: "50px" }}
								/>
								<Button
									type="submit"
									sx={{ width: "100%", marginTop: "50px" }}
									variant="contained"
								>
									Send Message
								</Button>
							</form>
						</div>
						<div className="c-icons">
							<Link href="https://github.com/DerElchausdemAll">
								<GitHubIcon sx={{ fontSize: "50px" }} />
							</Link>
							<Link href="https://www.linkedin.com/in/jan-peter-95242a233/">
								<LinkedInIcon sx={{ fontSize: "50px" }} />
							</Link>
						</div>
					</div>
					<BackToMenu />
				</div>
			</div>
		</StyledContact>
	);
};

export default Contact;
