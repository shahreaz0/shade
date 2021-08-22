import React from "react";
import Palette from "./components/Palette";
import colorPalettes from "./utils/seedColors";
import generateNewPalette from "./utils/generateColorShade.js";

function App() {
  console.log(generateNewPalette(colorPalettes[1]));
  return (
    <div className="App">
      <Palette colorPalette={colorPalettes[1]} />
    </div>
  );
}

export default App;
