import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Palette from "./components/Palette";
import colorPalettes from "./utils/seedColors";
import generateNewPalette from "./utils/generateColorShade.js";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/">
            <h1>Hello</h1>
          </Route>
          <Route exact path="/palette/:id">
            <h1>single route</h1>
          </Route>
        </Switch>
        {/*<Palette colorPalette={generateNewPalette(colorPalettes[1])} />*/}
      </div>
    </Router>
  );
}

export default App;
