import React, { Component } from "react";
import ColorBox from "./ColorBox";
import "./Palette.css";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";

export default class Palette extends Component {
	constructor(props) {
		super(props);
		this.state = {
			level: 500,
		};
	}

	handleSlider = (level) => {
		this.setState({ level });
	};

	render() {
		const { level } = this.state;
		const { colorPalette } = this.props;
		const colorBoxs = colorPalette.colors[level].map((colorProps) => (
			<ColorBox {...colorProps} key={colorProps.id} />
		));
		return (
			<div className="Palette">
				<Slider
					min={100}
					max={900}
					step={100}
					defaultValue={500}
					onChange={this.handleSlider}
				/>
				<div className="Palette-color-boxes">{colorBoxs}</div>
			</div>
		);
	}
}
