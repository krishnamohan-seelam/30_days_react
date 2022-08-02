import {
  H4,
  H6,
  UL,
  Card,
  Callout,
  Tag,
  Text,
  InputGroup,
} from "@blueprintjs/core";
import { Colors } from "@blueprintjs/core";
import classes from "./main.module.css";
import cssImage from "./images/icons8-css-64.png";
import htmlImage from "./images/icons8-html-5-64.png";
import jsImage from "./images/icons8-javascript-64.png";
import reactImage from "./images/icons8-react-64.png";
import Profile from "./Components/profile";
import { Route, Routes, Link } from "react-router-dom";
import Menu from "./Components/menu";
import ColorBox from "./Components/shapes/colorbox";
import MapNumbers from "./Components/map_number";

const AppHeader = (props) => {
  return (
    <header style={{ color: Colors.INDIGO1 }}>
      <Menu />
      <center>
        <h1>{props.welcome}</h1>
      </center>
    </header>
  );
};

function App() {
  return (
    <div className="App">
      <AppHeader />
      <Routes>
        <Route exact path="/" />
        <Route exact path="/profile" element={<Profile />}></Route>
        <Route exact path="/mapnumbers" element={<MapNumbers />}></Route>
        <Route exact path="/colorbox" element={<ColorBox />}></Route>
      </Routes>
    </div>
  );
}

export default App;
