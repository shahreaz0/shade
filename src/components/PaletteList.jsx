import React from "react";
import { Link } from "react-router-dom";
import { withStyles } from "@material-ui/core/styles";

// components
import MiniPalette from "./MiniPalette";

const styles = {
	root: {
		background:
			"url('https://res.cloudinary.com/dlfozpwa2/image/upload/c_scale,h_700,q_auto/v1633536807/shade/shade_bg_olnc0v.png')",
		height: "95vh",
	},
	navbar: {
		display: "flex",
		justifyContent: "flex-start",
		width: "100%",
		margin: "1rem 0",
	},
	container: {
		width: "60%",
		margin: "auto",
	},
	miniPalettes: {
		width: "100%",
		display: "grid",
		gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
		gridGap: "1.5rem",
	},
	link: {
		textDecoration: "none",
	},

	title: {
		fontFamily: "Barlow Semi Condensed,sans-serif",
		textTransform: "uppercase",
		letterSpacing: "2px",
		color: "#555",
		fontWeight: "500",
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
					<h1 className={classes.title}>PALETTE</h1>
				</nav>
				<div className={classes.miniPalettes}>{miniPalettes}</div>
			</div>
		</div>
	);
};

export default withStyles(styles)(PaletteList);
