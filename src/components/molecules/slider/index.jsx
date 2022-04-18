import React, { useState } from "react";
import { SliderData } from "../../ions/sliderData";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import "../../../index.css";
// import useStore from "../../ions/zustand/index";

const ImageSlider = ({ slides }) => {
	const [current, setCurrent] = useState(0);
	const length = slides.length;
	// const apps = useStore(state => state.apps);

	const nextSlide = () => {
		setCurrent(current === length - 1 ? 0 : current + 1);
		// apps(current);
	};

	const prevSlide = () => {
		setCurrent(current === 0 ? length - 1 : current - 1);
	};

	if (!Array.isArray(slides) || slides.length <= 0) {
		return null;
	}

	return (
		<div className="slider" current={current}>
			{SliderData.map((slide, index) => {
				return (
					<div className={index === current ? "slide active" : "slide"}>
						{index === current && (
							<div className="slider-wrapper">
								<ArrowBackIosNewIcon
									className="slider-arrow-left"
									onClick={prevSlide}
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
								/>
							</div>
						)}
					</div>
				);
			})}
		</div>
	);
};

export default ImageSlider;
