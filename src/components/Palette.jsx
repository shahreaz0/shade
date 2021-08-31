import React, { Component } from "react";
import ColorBox from "./ColorBox";
import Navbar from "./Navbar";
import "./Palette.css";

export default class Palette extends Component {
	constructor(props) {
		super(props);
		this.state = {
			level: 500,
			colorFormat: "hex",
		};
	}

	handleSlider = (level) => {
		this.setState({ level });
	};

	handleColorFormat = (color) => {
		this.setState({
			colorFormat: color,
		});
	};

	render() {
		const { level, colorFormat } = this.state;
		const { colorPalette } = this.props;
		const colorBoxs = colorPalette.colors[level].map((colorProps) => (
			<ColorBox
				colorName={colorProps.name}
				colorFormat={colorProps[colorFormat]}
				key={colorProps.id}
			/>
		));
		return (
			<div className="Palette">
				<Navbar
					level={level}
					handleSlider={this.handleSlider}
					handleColorFormat={this.handleColorFormat}
				/>
				<div className="Palette-color-boxes">{colorBoxs}</div>
			</div>
		);
	}
}
