import chroma from "chroma-js";

// levels
const levels = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900];

const generateNewPalette = (starterPallete) => {
	const newPalette = {
		paletteName: starterPallete.paletteName,
		id: starterPallete.id,
		emoji: starterPallete.emoji,
		colors: {},
	};

	levels.forEach((level) => (newPalette.colors[level] = []));

	starterPallete.colors.forEach((color, index) => {
		const scale = getColorScale(color.color, 10).reverse();

		scale.forEach((hex, index) => {
			newPalette.colors[levels[index]].push({
				name: `${color.name} ${levels[index]}`,
				id: color.name.toLowerCase().replace(/ /g, "-"),
				hex: hex,
				rgb: chroma(hex).css(),
				rgba: chroma(hex).alpha(0.9999).css(),
			});
		});
	});

	return newPalette;
};

const getRange = (color) => {
	return [chroma(color).darken(1.4), color, "#ffffff"];
};

const getColorScale = (color, numberOfGeneratedColor) => {
	return chroma.scale(getRange(color)).colors(numberOfGeneratedColor);
};

export default generateNewPalette;
