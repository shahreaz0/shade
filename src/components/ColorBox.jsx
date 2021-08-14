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
				<div className="copy-container">
					<div className="box-content">
						<span>{name}</span>
					</div>
					<button className="copy-button">Copy</button>
				</div>
				<span className="see-more">More</span>
			</div>
		);
	}
}
