import React from "react";
import { Link } from "react-router-dom";

const PaletteList = (props) => {
	const { palettes } = props;

	const palettesLinks = palettes.map((palette) => (
		<p>
			<Link to={`/palette/${palette.id}`}>{palette.paletteName}</Link>
		</p>
	));
	return (
		<div>
			<h1>Palette</h1>
			{palettesLinks}
		</div>
	);
};

export default PaletteList;
