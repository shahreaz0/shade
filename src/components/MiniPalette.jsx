import React from "react";
import { withStyles } from "@material-ui/core/styles";

const styles = {
	root: {
		backgroundColor: "white",
		cursor: "pointer",
		"&:hover": {
			backgroundColor: "#fafafa",
		},
		boxShadow: "5px 5px 14px 0px rgba(158,158,158,1)",
	},
	colors: {
		width: "100%",
	},
	miniColorBox: {
		display: "inline-block",
		position: "relative",
		height: "25px",
		marginBottom: "-3px",
		width: "20%",
	},
	title: {
		fontWeight: "500",
		display: "flex",
		justifyContent: "space-between",
		padding: ".5rem",
	},
	emoji: {},
};

const MiniPalette = (props) => {
	const { classes, emoji, paletteName, colors } = props;

	const colorsDiv = colors.map((color) => (
		<div
			key={color.name}
			className={classes.miniColorBox}
			style={{ backgroundColor: color.color }}
		></div>
	));

	return (
		<div className={classes.root}>
			<div className={classes.colors}>{colorsDiv}</div>
			<h4 className={classes.title}>
				{paletteName} <span className={classes.emoji}>{emoji}</span>
			</h4>
		</div>
	);
};

export default withStyles(styles)(MiniPalette);
