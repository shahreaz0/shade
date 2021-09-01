import React from "react";
import { withStyles } from "@material-ui/core/styles";

const styles = {
	main: {
		backgroundColor: "gray",
		color: "white",
		border: "5px solid skyblue",
	},
};

const MiniPalette = (props) => {
	const { classes } = props;
	return (
		<div className={classes.main}>
			<h1>Hello</h1>
		</div>
	);
};

export default withStyles(styles)(MiniPalette);
