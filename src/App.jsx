import React from "react";
import Palette from "./components/Palette";
import colorPalettes from "./utils/seedColors";
function App() {
  return (
    <div className="App">
      <Palette colorPalette={colorPalettes[1]} />
    </div>
  );
}

export default App;
