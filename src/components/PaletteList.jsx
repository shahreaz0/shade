import React from "react";
import { Link } from "react-router-dom";

// components
import MiniPalette from "./MiniPalette";

const PaletteList = (props) => {
	const { palettes } = props;

	const palettesLinks = palettes.map((palette, key) => (
		<Link key={key} to={`/palette/${palette.id}`}>
			<MiniPalette {...palette} />
		</Link>
	));
	return (
		<div>
			<h1>Palette</h1>
			{palettesLinks}
		</div>
	);
};

export default PaletteList;
