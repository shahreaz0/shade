import React, { Component } from "react";

export default class ColorBox extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		const { name, color } = this.props;
		return (
			<div className="ColorBox">
				<div style={{ backgroundColor: color }}>{name}</div>
			</div>
		);
	}
}
