import React from "react";
import BoardGame from "./components/boardgame";
import ControlPanel from "./components/controlpanel";
import "./App.sass";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      boardShape: { x: 6, y: 4 },
      cards: [
        "cat",
        "banana",
        "cat",
        "banana",
        "cat",
        "banana",
        "cat",
        "banana",
        "cat",
        "banana",
        "cat",
        "banana",
        "cat",
        "banana",
        "cat",
        "banana",
        "cat",
        "banana",
        "cat",
        "banana",
        "cat",
        "banana",
        "cat",
        "banana"
      ]
    };
  }
  render() {
    return (
      <div className="main">
        <BoardGame {...this.state} />
        <ControlPanel />
      </div>
    );
  }
}

export default App;
