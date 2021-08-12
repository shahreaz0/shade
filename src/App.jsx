import React from "react";
import Palette from "./components/Palette";
import colorPalettes from "./utils/seedColors";
function App() {
  return (
    <div className="App">
      <h1>Home</h1>
      <Palette colorPalette={colorPalettes[0]} />
    </div>
  );
}

export default App;
