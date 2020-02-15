import React from "react";
import BoardGame from "./components/boardgame";
import ControlPanel from "./components/controlpanel";
import { SettingsScreen, ThemesScreen } from "./components/screens";
import { defaultCards } from "./components/themes";
import { HashRouter, Route } from "react-router-dom";
import "./App.sass";
import "bootstrap/dist/css/bootstrap.min.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      boardShape: { x: 6, y: 4 },
      cards: defaultCards,
      currentScreen: "game",
      teamCount: 4,
      teams: [
        { name: "Team A", score: 0 },
        { name: "Team B", score: 0 },
        { name: "Team C", score: 0 },
        { name: "Team D", score: 0 },
        { name: "Team E", score: 0 },
        { name: "Team F", score: 0 }
      ]
    };
    this.cardClick = this.cardClick.bind(this);
    this.changeShape = this.changeShape.bind(this);
    this.changeTheme = this.changeTheme.bind(this);
    this.changeScore = this.changeScore.bind(this);
    this.changeSettings = this.changeSettings.bind(this);
    this.changeTeams = this.changeTeams.bind(this);
    this.changeScreen = this.changeScreen.bind(this);
  }

  cardClick = props => {
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

  changeScreen = props => {
    console.log("changeScreen, props: ", props);
    this.setState({
      currentScreen: props
    });
  };

  changeTheme = props => {
    console.log("changeTheme, props: ", props);
    // this.selectCards();
  };

  changeScore = (props, team) => {
    // console.log("changeScore, props: ", props, team);
    let teamsCopy = this.state.teams;
    teamsCopy.forEach(item => {
      if (item.name === team) {
        props === "plus" ? item.score++ : item.score--;
      }
    });
    // console.log("teamsCopy: ", teamsCopy);
    this.setState({
      teams: teamsCopy
    });
  };

  changeSettings = props => {
    console.log("changeSettings, props: ", props);
  };

  changeTeams = props => {
    // console.log("changeTeams, props: ", props);
    let newCount;
    if (props === "plus") {
      if (this.state.teamCount >= 6) {
        newCount = 6;
      } else if (this.state.teamCount < 2) {
        newCount = 2;
      } else {
        newCount = this.state.teamCount + 1;
      }
    } else {
      if (this.state.teamCount <= 2) {
        newCount = 0;
      } else {
        newCount = this.state.teamCount - 1;
      }
    }
    this.setState(state => {
      return { teamCount: newCount };
    });
    // console.log(this.state);
  };

  render() {
    return (
      <HashRouter>
        <div className="main">
          <Route
            exact
            path="/"
            render={props => (
              <BoardGame {...this.state} handleClick={this.cardClick} />
            )}
          />
          <Route path="/settings" component={SettingsScreen} />
          <Route
            path="/game"
            render={props => (
              <BoardGame {...this.state} handleClick={this.cardClick} />
            )}
          />
          <Route path="/themes" component={ThemesScreen} />
          <ControlPanel
            changeShape={this.changeShape}
            changeScore={this.changeScore}
            changeSettings={this.changeSettings}
            changeScreen={this.changeScreen}
            changeTheme={this.changeTheme}
            changeTeams={this.changeTeams}
            {...this.state}
          />
        </div>
      </HashRouter>
    );
  }
}

export default App;
