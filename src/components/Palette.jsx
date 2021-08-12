import React, { Component } from "react";
import ColorBox from "./ColorBox";
import "./Palette.css";

export default class Palette extends Component {
	constructor(props) {
		super(props);
	}
	render() {
		const { colorPalette } = this.props;
		const colorBoxs = colorPalette.colors.map((colorProps) => (
			<ColorBox {...colorProps} key={colorProps.name} />
		));
		return (
			<div className="Palette">
				<h1>Palette</h1>
				<div className="Palette-color-boxes">{colorBoxs}</div>
			</div>
		);
	}
}
