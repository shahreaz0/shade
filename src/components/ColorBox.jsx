import React, { Component } from "react";
import "./ColorBox.css";

export default class ColorBox extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		const { name, color } = this.props;
		return (
			<div className="ColorBox" style={{ backgroundColor: color }}>
				{name}
			</div>
		);
	}
}
