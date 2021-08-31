import React, { Component } from "react";
import { Link } from "react-router-dom";

// rc-slider
import Slider from "rc-slider";
import "rc-slider/assets/index.css";
// meterial ui
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import Button from "@material-ui/core/Button";
import Snackbar from "@material-ui/core/Snackbar";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
// custom css
import "./Navbar.css";

class Navbar extends Component {
	constructor(props) {
		super(props);
		this.state = {
			colorFormat: "hex",
			open: false,
		};
	}

	handleColorFormat = (event) => {
		this.setState({
			colorFormat: event.target.value,
			open: true,
		});
		this.props.handleColorFormat(event.target.value);
	};

	handleClose = () => {
		this.setState({
			open: false,
		});
	};

	render() {
		const { level, handleSlider } = this.props;
		const { colorFormat, open } = this.state;
		return (
			<header className="Navbar">
				<div className="logo">
					<Link to="/" className="logo-text">
						SHADE
					</Link>
				</div>

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
				<div className="select-color-format">
					<Select
						value={colorFormat}
						onChange={this.handleColorFormat}
					>
						<MenuItem value="hex">HEX</MenuItem>
						<MenuItem value="rgb">RGB</MenuItem>
						<MenuItem value="hsl">HSL</MenuItem>
					</Select>
				</div>
				<Snackbar
					anchorOrigin={{
						vertical: "bottom",
						horizontal: "left",
					}}
					open={open}
					onClose={this.handleClose}
					autoHideDuration={4000}
					message={`Color format changed to ${colorFormat.toUpperCase()}`}
					action={
						<React.Fragment>
							<IconButton
								size="small"
								aria-label="close"
								color="inherit"
								onClick={this.handleClose}
							>
								<CloseIcon fontSize="small" />
							</IconButton>
						</React.Fragment>
					}
				/>
			</header>
		);
	}
}

export default Navbar;
