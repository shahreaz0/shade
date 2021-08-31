import React, { Component } from "react";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import "./Navbar.css";

class Navbar extends Component {
	constructor(props) {
		super(props);
		this.state = {
			colorFormat: "hex",
		};
	}

	handleColorFormat = (event) => {
		console.log(event.target.value);
		this.setState({
			colorFormat: event.target.value,
		});
		this.props.handleColorFormat(event.target.value);
	};

	render() {
		const { level, handleSlider } = this.props;
		const { colorFormat } = this.state;
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
				<div>
					<Select
						value={colorFormat}
						onChange={this.handleColorFormat}
					>
						<MenuItem value="hex">HEX</MenuItem>
						<MenuItem value="rgb">RGB</MenuItem>
						<MenuItem value="hsl">HSL</MenuItem>
					</Select>
				</div>
			</header>
		);
	}
}

export default Navbar;
