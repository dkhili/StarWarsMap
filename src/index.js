import React from "react";
import { render } from "react-dom";
import StarWars from "./StarWars";

const styles = {
  fontFamily: "sans-serif",
  textAlign: "center"
};

const App = () => (
  <div style={styles}>
    <StarWars name="CodeSandbox" />
  </div>
);

render(<App />, document.getElementById("root"));
