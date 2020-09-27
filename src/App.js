import React from "react";
import BoardGame2 from "./components/boardgame2";
import CardAmountBtn from "./components/cardAmountBtn";
import VocabBtn from "./components/vocabBtn";
import { boardShapes, defaultShape } from "./boardshapes";
import { BoardShapeScreen, VocabScreen } from "./components/optionScreens";
import { misc, fruits, animals, colors } from "./vocab";
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
    this.changeScreen = this.changeScreen.bind(this);
    this.updateBoard = this.updateBoard.bind(this);
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
          <div className="control-panel">
            <VocabBtn
              currentScreen={this.state.currentScreen}
              changeScreen={this.changeScreen}
            />
            <CardAmountBtn
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
            path="/card-amount"
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
      </HashRouter>
    );
  }
}


App.propTypes = {
  boardShape: PropTypes.object,
  deck: PropTypes.array,
  deckName: PropTypes.string,
  currentScreen: PropTypes.string,
};


App.defaultProps = {
  boardShape: { size: 8, x: 4, y: 2 },
  deck: [
    {
      name: "youtube",
      image: process.env.PUBLIC_URL + "/youtube.jpg",
      flipped: false,
    },
  ],
  deckName: "Default deckName",
  currentScreen: "Default screen",
};


export default App;
