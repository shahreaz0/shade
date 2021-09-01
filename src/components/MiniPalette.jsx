import React from "react";
import { withStyles } from "@material-ui/core/styles";

const styles = {
	root: {
		backgroundColor: "white",
		margin: ".5rem",
		padding: ".5rem",
		border: "1px solid black",
		cursor: "pointer",
		"&:hover": {
			backgroundColor: "#fafafa",
		},
	},
	colors: {},
	title: {
		fontWeight: "400",
		display: "flex",
		justifyContent: "space-between",
	},
	emoji: {},
};

const MiniPalette = (props) => {
	const { classes, emoji, paletteName } = props;
	return (
		<div className={classes.root}>
			<div className={classes.colors}></div>
			<h4 className={classes.title}>
				{paletteName} <span className={classes.emoji}>{emoji}</span>
			</h4>
		</div>
	);
};

export default withStyles(styles)(MiniPalette);
