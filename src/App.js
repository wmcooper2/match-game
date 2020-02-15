import React from "react";
import BoardGame from "./components/boardgame";
import ControlPanel from "./components/controlpanel";
import { boardShapes, defaultShape } from "./boardshapes";
import { SettingsScreen, ThemesScreen } from "./components/screens";
import { defaultCards, fruits } from "./components/themes";
import { HashRouter, Route } from "react-router-dom";
import "./App.sass";
import "bootstrap/dist/css/bootstrap.min.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      boardShape: defaultShape,
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

    this.themeChoices = [
      { name: "default", cards: defaultCards },
      { name: "fruits", cards: fruits }
    ];

    this.cardClick = this.cardClick.bind(this);
    this.changeShape = this.changeShape.bind(this);
    this.changeDeck = this.changeDeck.bind(this);
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
    let oldCards = props.slice();
    let newCards = [];

    //set pair limit
    const pairLimit = Math.floor(
      (this.state.boardShape.x * this.state.boardShape.y) / 2
    );

    //choose (pair limit) random cards
    for (let i = 0; i < pairLimit; i++) {
      let choice = Math.floor(Math.random() * oldCards.length);
      newCards.push(oldCards[choice]);
      oldCards.splice(choice, 1);
    }

    //make pairs of the cards
    newCards = newCards.concat(newCards);
    // console.log("newCards: ", newCards);

    //randomize the final deck of cards
    let randomOrder = [];
    const randomLimit = newCards.length;
    for (let i = 0; i < randomLimit; i++) {
      let choice = Math.floor(Math.random() * newCards.length);
      randomOrder.push(newCards[choice]);
      newCards.splice(choice, 1);
    }
    // console.log("randomOrder: ", randomOrder);

    this.setState(state => {
      return { cards: randomOrder };
    });
  };

  changeShape = props => {
    console.log("changeShape, props: ", props);
    //filter the object that matches the size
    let newShape = boardShapes.filter(item => item.size === props);

    //update the card pairs on the board screen to match the new shape
    // this.selectCards(this.state.cards);

    //set the state
    this.setState(state => {
      return { boardShape: newShape[0] };
    });
  };

  changeScreen = props => {
    // console.log("changeScreen, props: ", props);
    this.setState({
      currentScreen: props
    });
  };

  changeDeck = props => {
    // console.log("changeDeck, props: ", props);
    let newDeck = this.themeChoices.filter(choice => choice.name === props);
    this.selectCards(newDeck[0].cards);
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
          {/* <Route path="/settings" component={SettingsScreen} /> */}
          <Route
            path="/settings"
            render={props => (
              <SettingsScreen
                choices={boardShapes}
                changeShape={this.changeShape}
              />
            )}
          />
          <Route
            path="/game"
            render={props => (
              <BoardGame {...this.state} handleClick={this.cardClick} />
            )}
          />
          <Route
            path="/themes"
            render={props => (
              <ThemesScreen
                changeDeck={this.changeDeck}
                choices={this.themeChoices}
              />
            )}
          />
          <ControlPanel
            changeShape={this.changeShape}
            changeScore={this.changeScore}
            changeSettings={this.changeSettings}
            changeScreen={this.changeScreen}
            changeDeck={this.changeDeck}
            changeTeams={this.changeTeams}
            {...this.state}
          />
        </div>
      </HashRouter>
    );
  }
}

export default App;
