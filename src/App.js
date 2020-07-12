import React from "react";
import BoardGame2 from "./components/boardgame2";
import ControlPanel from "./components/controlpanel";
import SettingsBtn from "./components/settingsBtn";
import DecksBtn from "./components/decksBtn";
import { Teams } from "./teams";
import { boardShapes, defaultShape } from "./boardshapes";
import { BoardShapeScreen, VocabScreen } from "./components/optionScreens";
import { misc, fruits, animals, colors } from "./decks";
import { HashRouter, Route } from "react-router-dom";
import "./css/App.css";
import PropTypes from "prop-types";
import "bootstrap/dist/css/bootstrap.min.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      boardShape: defaultShape,
      deck: misc,
      deckName: "misc",
      currentScreen: "game",
      teamCount: 4,
      teams: Teams,
    };

    this.deckChoices = [
      { name: "color", deck: colors },
      { name: "fruit", deck: fruits },
      { name: "animal", deck: animals },
      { name: "misc", deck: misc },
    ];

    this.cardClick = this.cardClick.bind(this);
    this.changeBoardShape = this.changeBoardShape.bind(this);
    this.changeVocab = this.changeVocab.bind(this);
    this.changeScore = this.changeScore.bind(this);
    this.teamIncDec = this.teamIncDec.bind(this);
    this.changeScreen = this.changeScreen.bind(this);
    this.updateBoard = this.updateBoard.bind(this);
    this.updateTeamName = this.updateTeamName.bind(this);
  }

  cardClick = (props) => {
    let deck = this.state.deck.slice();
    deck[props].flipped = !deck[props].flipped;
    this.setState({
      deck: deck,
    });
  };

  updateBoard = (props) => {
    let deckName = this.state.deckName;
    let deck = this.deckChoices.filter((choice) => choice.name === deckName);
    deck = deck[0].deck; // because of filter
    let boardShape = this.state.boardShape;

    let deckCopy = deck.slice(); //copy so you don't ruin the original
    deckCopy.forEach((item) => (item.flipped = false)); // reset flipped before display
    const pairLimit = (boardShape.x * boardShape.y) / 2; // set pair limit

    // choose (pair limit) random deck
    let newCards = [];
    for (let i = 0; i < pairLimit; i++) {
      let choice = Math.floor(Math.random() * deckCopy.length);
      newCards.push(deckCopy[choice]);
      deckCopy.splice(choice, 1);
    }

    // make pairs of the deck, slice copies refs... use map
    const noRefCopy = newCards.map((item) => {
      return { ...item };
    });
    newCards = newCards.concat(noRefCopy);

    // randomize the final deck of deck
    let randomOrder = [];
    const randomLimit = newCards.length;
    for (let i = 0; i < randomLimit; i++) {
      let choice = Math.floor(Math.random() * newCards.length);
      randomOrder.push(newCards[choice]);
      newCards.splice(choice, 1);
    }

    this.setState(() => {
      return {
        deck: randomOrder,
        deckName: deckName,
        boardShape: boardShape,
      };
    });
  };

  changeBoardShape = (props) => {
    let newShape = boardShapes.filter((item) => item.size === props);
    this.setState(() => {
      return { boardShape: newShape[0] };
    });
  };

  changeVocab = (props) => {
    let newDeck = this.deckChoices.filter((choice) => choice.name === props);
    this.setState(() => {
      return { deckName: newDeck[0].name };
    });
  };

  changeScore = (props, team) => {
    let teamsCopy = this.state.teams;
    teamsCopy.forEach((item) => {
      if (item.name === team) {
        props === "plus" ? item.score++ : item.score--;
      }
    });
    this.setState({
      teams: teamsCopy,
    });
  };

  teamIncDec = (props) => {
    let newCount;
    if (props === "plus") {
      if (this.state.teamCount >= 4) {
        newCount = 4;
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
    this.setState((state) => {
      return { teamCount: newCount };
    });
  };

  updateTeamName = (props) => {
    // console.log("updateTeamName: ", team, name);
    // console.log("update team name: ", props);
    // let teams = this.state.Teams;
    // teams.indexOf(props);
  };

  changeScreen = (props) => {
    if (props === "/") {
      //return to game board screen
      this.updateBoard();
    }
    this.setState({
      currentScreen: props,
    });
  };

  render() {
    return (
      <HashRouter>
        <div className="main">
          <div className="control-panel2">
            <DecksBtn
              currentScreen={this.state.currentScreen}
              changeScreen={this.changeScreen}
            />
            <SettingsBtn
              currentScreen={this.state.currentScreen}
              changeScreen={this.changeScreen}
            />
          </div>
          <Route
            exact
            path="/"
            render={(props) => (
              <BoardGame2
                boardShape={this.state.boardShape}
                handleClick={this.cardClick}
                deck={this.state.deck}
              />
            )}
          />
          <Route
            path="/cards"
            render={(props) => (
              <BoardShapeScreen
                choices={boardShapes}
                changeBoardShape={this.changeBoardShape}
              />
            )}
          />

          <Route
            path="/vocab"
            render={(props) => (
              <VocabScreen
                changeVocab={this.changeVocab}
                choices={this.deckChoices}
              />
            )}
          />
        </div>
        <ControlPanel
          changeScore={this.changeScore}
          changeScreen={this.changeScreen}
          teamIncDec={this.teamIncDec}
          updateTeamName={this.updateTeamName}
          {...this.state}
        />
      </HashRouter>
    );
  }
}

App.propTypes = {
  boardShape: PropTypes.object,
  deck: PropTypes.array,
  deckName: PropTypes.string,
  currentScreen: PropTypes.string,
  teamCount: PropTypes.number,
  teams: PropTypes.array,
};

// const defaultShape =
App.defaultProps = {
  boardShape: { size: 8, x: 4, y: 2 },
  deck: [
    {
      name: "youtube",
      image:
        "https://s3-ap-northeast-1.amazonaws.com/wmcooper2.com/tefl-assistant/match-game/youtube.jpg",
      flipped: false,
    },
  ],
  deckName: "Default deckName",
  currentScreen: "Default screen",
  teamCount: 1,
  teams: [{ name: "Team A", score: 0 }],
};

export default App;
