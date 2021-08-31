import React from "react";
import { Switch, Route, Link } from "react-router-dom";
import colorPalettes from "./utils/seedColors";
import generateNewPalette from "./utils/generateColorShade.js";

// components
import Palette from "./components/Palette";
import PaletteList from "./components/PaletteList";

function App() {
  const findPalette = (id) => {
    return colorPalettes.find((palette) => palette.id === id);
  };
  return (
    <div className="App">
      <Switch>
        <Route
          exact
          path="/"
          render={() => <PaletteList palettes={colorPalettes} />}
        />
        <Route
          exact
          path="/palette/:id"
          render={(routeProps) => (
            <Palette
              colorPalette={generateNewPalette(
                findPalette(routeProps.match.params.id)
              )}
            />
          )}
        />
      </Switch>
    </div>
  );
}

export default App;
