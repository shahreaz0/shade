import React, { Component } from "react";
import ColorBox from "./ColorBox";
import Navbar from "./Navbar";
import "./Palette.css";

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
				<Navbar level={level} handleSlider={this.handleSlider} />
				<div className="Palette-color-boxes">{colorBoxs}</div>
			</div>
		);
	}
}
