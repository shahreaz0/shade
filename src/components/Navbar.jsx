import React from "react";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import "./Navbar.css";

const Navbar = (props) => {
	const { level, handleSlider } = props;
	return (
		<header className="Navbar">
			<div className="logo">SHADE</div>
			<div className="slider">
				<span className="level-text">Level: {level}</span>
				<Slider
					min={100}
					max={900}
					step={100}
					defaultValue={500}
					onChange={handleSlider}
				/>
			</div>
		</header>
	);
};

export default Navbar;
