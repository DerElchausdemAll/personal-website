import React, { useState } from "react";
import { StyledProject } from "./styled";
import "../../../index.css";
import { SliderData } from "../../ions/sliderData";
import Button from "@mui/material/Button";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

import { useInView } from "react-intersection-observer";

const Project = ({ backgroundRef }) => {
	const [current, setCurrent] = useState(0);

	const slides = SliderData;
	const length = slides.length;
	console.log(slides);
	const nextSlide = () => {
		setCurrent(current === length - 1 ? 0 : current + 1);
	};

	const prevSlide = () => {
		setCurrent(current === 0 ? length - 1 : current - 1);
	};

	if (!Array.isArray(slides) || slides.length <= 0) {
		return null;
	}

	const { ref: myRef, inView: headlineIsVisible } = useInView();

	const { ref: myRef2, inView: headline2IsVisible } = useInView();

	return (
		<StyledProject id="project">
			<div className="p">
				<div className="p-headline">
					<p ref={myRef2}></p>
					<p ref={myRef}></p>
					<h2 className={`${headlineIsVisible ? "p-text1-ref" : "p-text1"}`}>
						first steps of coding
					</h2>
					<p ref={backgroundRef}></p>
					<h1 className={`${headline2IsVisible ? "p-text2-ref" : "p-text2"}`}>
						my showcase
					</h1>
				</div>
				<div className="p-content">
					<div className="p-left-wrapper">
						<div className="p-left-slider">
							<div className="slider">
								{SliderData.map((slide, index) => {
									return (
										<div
											className={index === current ? "slide active" : "slide"}
										>
											{index === current && (
												<div className="slider-wrapper">
													<ArrowBackIosNewIcon
														className="slider-arrow-left"
														onClick={prevSlide}
														sx={{ fontSize: "40px" }}
													/>
													<img
														key={index}
														src={slide.image}
														alt="lolo"
														className="slider-image"
													/>
													<ArrowForwardIosIcon
														className="slider-arrow-right"
														onClick={nextSlide}
														sx={{ fontSize: "40px" }}
													/>
												</div>
											)}
										</div>
									);
								})}
							</div>
						</div>
					</div>

					<div className="p-central-wrapper">
						<div className="p-info">
							{current === 1
								? "This is a project for adding movies to your watchlist. You can also browse through the most popular movies. It is still in progress."
								: current === 2
								? "A nice little Todo-App with an edit and delete feature. The Todos are stored in the local storage. I build this with React, Zustand and Immer."
								: "This is my capstone project Toy Cycle. It's an App for renting Toys. I build this App with Next.js and React. The data is stored in a mongo database."}
						</div>
						<div className="p-button-wrapper">
							<Button variant="outlined" sx={{ fontSize: "2rem", width: "250px" }}>
								{current === 1 ? (
									<a href="https://movie-app-theta-one.vercel.app">Homepage</a>
								) : current === 2 ? (
									<a href="https://react-practice-repo.vercel.app">Homepage</a>
								) : (
									<a href="https://nf-capstone-mauve.vercel.app">Homepage</a>
								)}
							</Button>
							<Button variant="outlined" sx={{ fontSize: "2rem", width: "250px" }}>
								{current === 1 ? (
									<a href="https://github.com/DerElchausdemAll/movie-app">
										GitHub
									</a>
								) : current === 2 ? (
									<a href="https://github.com/DerElchausdemAll/react-practice-repo">
										GitHub
									</a>
								) : (
									<a href="https://github.com/DerElchausdemAll/nf-capstone">
										GitHub
									</a>
								)}
							</Button>
						</div>
					</div>

					<div className="p-right-wrapper">
						<img
							className="p-image"
							src="https://images.unsplash.com/photo-1618477388954-7852f32655ec?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80"
							alt="coding"
						></img>
					</div>
				</div>
			</div>
		</StyledProject>
	);
};

export default Project;

// https://www.youtube.com/watch?v=hQjlM-8C4Ps

// https://www.youtube.com/watch?v=r1auJEf9ISo

// const { ref: myRef, inView: elementIsVisible } = useInView();
// console.log(elementIsVisible);

// const { ref: backgroundRef, inView: backgroundGlobalRef } = useInView();

// const myRef = useRef();
// const [elementIsVisible, setElementIsVisible] = useState();

// useEffect(() => {
// 	const observer = new IntersectionObserver(entries => {
// 		const entry = entries[0];
// 		setElementIsVisible(entry.isIntersecting);
// 	});
// 	observer.observe(myRef.current);
// }, []);

// import React, { useState } from "react";
// import { StyledProject } from "./styled";
// import "../../../index.css";
// import Button from "@mui/material/Button";
// import { SliderData } from "../../ions/sliderData";
// import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
// import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

// const Project = ({ backgroundRef }) => {
// 	const slides = { SliderData };

// 	const [current, setCurrent] = useState(0);
// 	const length = slides.length;

// 	const nextSlide = () => {
// 		setCurrent(current === length - 1 ? 0 : current + 1);
// 	};

// 	const prevSlide = () => {
// 		setCurrent(current === 0 ? length - 1 : current - 1);
// 	};

// 	if (!Array.isArray(slides) || slides.length <= 0) {
// 		return null;
// 	}

// 	return (
// 		<StyledProject id="project">
// 			<div className="p">
// 				<div className="p-left">
// 					<div className="p-wrapper">
// 						<h2 className="p-text1">first steps of coding</h2>
// 						<h1 className="p-text2" ref={backgroundRef}>
// 							my showcase
// 						</h1>
// 						<div className="projecttest">
// 							<div className="slider" current={current}>
// 								{SliderData.map((slide, index) => {
// 									return (
// 										<div
// 											className={index === current ? "slide active" : "slide"}
// 										>
// 											{index === current && (
// 												<div className="slider-wrapper">
// 													<ArrowBackIosNewIcon
// 														className="slider-arrow-left"
// 														onClick={prevSlide}
// 													/>
// 													<img
// 														key={index}
// 														src={slide.image}
// 														alt="lolo"
// 														className="slider-image"
// 													/>
// 													<ArrowForwardIosIcon
// 														className="slider-arrow-right"
// 														onClick={nextSlide}
// 													/>
// 												</div>
// 											)}
// 										</div>
// 									);
// 								})}
// 							</div>
// 						</div>
// 					</div>
// 				</div>
// 				<div className="p-right">
// 					<div className="p-right-wrapper">
// 						<div className="p-info">
// 							{current === 1 ? "huhu" : current === 2 ? "Test" : "lets go"}
// 						</div>
// 						<div className="p-button-wrapper">
// 							<Button variant="outlined">Homepage</Button>
// 							<Button variant="outlined">GitHub</Button>
// 						</div>
// 					</div>
// 				</div>
// 			</div>
// 		</StyledProject>
// 	);
// };

// export default Project;
