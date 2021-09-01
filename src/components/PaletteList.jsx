import React from "react";
import { Link } from "react-router-dom";

// components
import MiniPalette from "./MiniPalette";

const PaletteList = (props) => {
	const { palettes } = props;

	const palettesLinks = palettes.map((palette, key) => (
		<p key={key}>
			<Link to={`/palette/${palette.id}`}>{palette.paletteName}</Link>
		</p>
	));
	return (
		<div>
			<MiniPalette />
			<h1>Palette</h1>
			{palettesLinks}
		</div>
	);
};

export default PaletteList;
