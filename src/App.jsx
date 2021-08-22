import React from "react";
import Palette from "./components/Palette";
import colorPalettes from "./utils/seedColors";
import generateNewPalette from "./utils/generateColorShade.js";

function App() {
  return (
    <div className="App">
      <Palette colorPalette={generateNewPalette(colorPalettes[1])} />
    </div>
  );
}

export default App;
