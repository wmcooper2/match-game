import React from "react";
import BoardGame from "./components/boardgame";
import ControlPanel from "./components/controlpanel";
import { defaultCards } from "./components/themes";
import "./App.sass";
import "bootstrap/dist/css/bootstrap.min.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      boardShape: { x: 6, y: 4 },
      cards: defaultCards,
      teamCount: 4
    };
    this.handleClick = this.handleClick.bind(this);
    this.changeShape = this.changeShape.bind(this);
    this.changeTheme = this.changeTheme.bind(this);
    this.changeScore = this.changeScore.bind(this);
    this.changeTeam = this.changeTeam.bind(this);
  }

  handleClick = props => {
    console.log(props);
  };

  selectCards = props => {
    console.log("selectCards, props: ", props);
    let oldCards = this.state.cards;
    let newCards = [];
    for (let i = 0; i < oldCards.length; i++) {
      let choice = Math.floor(Math.random() * oldCards.length);
      newCards.push(oldCards.pop(choice));
    }
    this.setState(state => {
      return { cards: newCards };
    });
  };

  changeShape = props => {
    console.log("changeShape, props: ", props);
  };

  changeTheme = props => {
    console.log("changeTheme, props: ", props);
    this.selectCards();
  };

  changeScore = props => {
    console.log("changeScore, props: ", props);
  };

  changeTeam = props => {
    console.log("changeTeam, props: ", props);

    let newCount =
      props === "plus" ? this.state.teamCount + 1 : this.state.teamCount - 1;

    this.setState(state => {
      return { teamCount: newCount };
    });
  };

  render() {
    return (
      <div className="main">
        <BoardGame {...this.state} handleClick={this.handleClick} />
        <ControlPanel
          changeShape={this.changeShape}
          changeScore={this.changeScore}
          changeTheme={this.changeTheme}
          changeTeam={this.changeTeam}
          {...this.state}
        />
      </div>
    );
  }
}

export default App;
