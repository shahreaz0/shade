import React from "react";
import { Link } from "react-router-dom";
import { withStyles } from "@material-ui/core/styles";

// components
import MiniPalette from "./MiniPalette";

const styles = {
	root: {
		backgroundColor: "#eee",
		display: "flex",
		justifyContent: "center",
	},
	navbar: {
		display: "flex",
		justifyContent: "flex-start",
		width: "100%",
		margin: "1rem 0",
	},
	container: {
		width: "50%",
		display: "flex",
		flexWrap: "wrap",
	},
	miniPalettes: {
		width: "100%",
		border: "1px solid black",
		display: "grid",
	},
	link: {
		textDecoration: "none",
	},
};

const PaletteList = (props) => {
	const { palettes, classes } = props;

	const miniPalettes = palettes.map((palette, key) => (
		<Link key={key} to={`/palette/${palette.id}`} className={classes.link}>
			<MiniPalette {...palette} />
		</Link>
	));
	return (
		<div className={classes.root}>
			<div className={classes.container}>
				<nav className={classes.navbar}>
					<h1>Palette</h1>
				</nav>
				<div className={classes.miniPalettes}>{miniPalettes}</div>
			</div>
		</div>
	);
};

export default withStyles(styles)(PaletteList);
