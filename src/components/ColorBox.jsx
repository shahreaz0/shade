import React, { Component } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import "./ColorBox.css";

export default class ColorBox extends Component {
	constructor(props) {
		super(props);
		this.state = {
			isCopied: false,
		};
	}

	changeCopyState = () => {
		this.setState({ isCopied: true }, () => {
			setTimeout(() => this.setState({ isCopied: false }), 2000);
		});
	};

	render() {
		const { name, color } = this.props;
		const { isCopied } = this.state;
		return (
			<CopyToClipboard text={color} onCopy={this.changeCopyState}>
				<div className="ColorBox" style={{ backgroundColor: color }}>
					<div
						className={`copy-overlay ${isCopied && "show"}`}
						style={{ backgroundColor: color }}
					/>
					<div className={`copy-msg ${isCopied && "show"}`}>
						<h1>Copied!</h1>
					</div>
					<div className="copy-container">
						<div className="box-content">
							<span>{name}</span>
						</div>
						<button className="copy-button">Copy</button>
					</div>
					<span className="see-more">More</span>
				</div>
			</CopyToClipboard>
		);
	}
}
