import React, { useEffect, useState } from "react";
import { StyledAbout } from "./styled";
import { useInView } from "react-intersection-observer";

const About = ({ test }) => {
	const [offsetY, setOffsetY] = useState(0);
	const handleScroll = () => setOffsetY(window.pageYOffset);

	useEffect(() => {
		window.addEventListener("scroll", handleScroll);

		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	const { ref: myRef, inView: imageIsVisible } = useInView();

	console.log(imageIsVisible);

	return (
		<StyledAbout id="about">
			<div className="a" ref={myRef}>
				<div className="a-wrapper-one">
					<div className="a-left">
						<div className="a-left-text">
							<h3 className="a-left-text-headline" ref={test}>
								Tech Stack
							</h3>
							<p className="a-left-text-description">
								JavaScript, React, Next.js, HTML, CSS, Zustand, MUI, Emotion,
								Cloudinary, MongoDb, Mongoose, Git-Workflow, npm
							</p>
						</div>
					</div>
					<div className="a-right">
						<div className="a-right-wrapper">
							<div className="a-images-left">
								<img
									className={`${
										imageIsVisible ? "image-hobby-ref" : "image-hobby"
									}`}
									src="https://images.unsplash.com/photo-1497493292307-31c376b6e479?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80"
									alt="#"
								/>
								<img
									className={`${
										imageIsVisible ? "image-hobby-ref" : "image-hobby"
									}`}
									src="https://images.unsplash.com/photo-1559627755-42212e5c5fdf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80"
									alt="#"
								/>
							</div>
							<div className="a-image-right">
								<img
									className={`${
										imageIsVisible ? "image-hobby-ref" : "image-hobby"
									}`}
									src="https://images.unsplash.com/photo-1560412838-f0eaf1d23074?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1176&q=80"
									alt="#"
								/>
							</div>
						</div>
					</div>
				</div>
				<div className="a-wrapper-two" ref={myRef}>
					<div
						style={{
							transform: `translateX(-${offsetY * 0.1}px)`,
						}}
						className="a-interests-one"
					>
						Creativity • Journalism • Coding • Bouldering • Politics • Surfing • Culture
						• Creativity • Journalism • Coding • Bouldering • Politics • Surfing •
						Culture • Creativity • Journalism • Coding • Bouldering • Politics • Surfing
						• Culture • Creativity • Journalism • Coding • Bouldering • Politics •
						Surfing • Culture • Creativity • Journalism • Coding • Bouldering • Politics
						• Surfing • Culture
					</div>
					{/* <div
						style={{
							transform: `translateX(${offsetY * 0.1}px)`,
						}}
						className="a-interests-two"
					>
						Creativity • Journalism • Coding • Bouldering • Politics • Surfing • Culture
						• Creativity • Journalism • Coding • Bouldering • Politics • Surfing •
						Culture • Creativity • Journalism • Coding • Bouldering • Politics • Surfing
						• Culture • Creativity • Journalism • Coding • Bouldering • Politics •
						Surfing • Culture • Creativity • Journalism • Coding • Bouldering • Politics
						• Surfing • Culture
					</div> */}
				</div>
			</div>
		</StyledAbout>
	);
};

export default About;
