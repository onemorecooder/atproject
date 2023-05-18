import "./App.css";
import Bg from "./components/bg/Bg";
import MouseTracker from "./components/mouseTracker/MouseTracker";
import { React } from "react";

import "./fonts/SpaceMono-Regular.ttf";
import ColorChanger from "./components/colorChanger/ColorChanger";

function App() {
  return (
    <div>
      <ColorChanger />
      <MouseTracker />
      <Bg />
    </div>
  );
}

export default App;
