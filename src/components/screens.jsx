import React from "react";
import Button from "react-bootstrap/Button";

const SettingsScreen = props => {
  // console.log("SettingsScreen, props: ", props);
  const { updateBoard, choices } = props;
  let shapes = [];
  choices.forEach(choice => {
    shapes.push(
      <Button
        key={choice.size}
        className="deck"
        onClick={() => updateBoard(choice.size)}
      >
        {choice.size}
      </Button>
    );
  });

  return (
    <div className="screen">
      <div className="instructions">Choose the number of cards you want.</div>
      <div className="shapechoices">{shapes.reverse()}</div>
    </div>
  );
};

const DeckScreen = props => {
  // console.log("DeckScreen, props: ", props);
  const { updateBoard, choices } = props;
  let decks = [];
  choices.forEach(choice =>
    decks.push(
      <Button
        key={choice.name}
        className="deck"
        onClick={() => updateBoard(choice.name)}
      >
        {choice.name}
      </Button>
    )
  );

  return (
    <div className="screen">
      <div className="instructions">Choose the deck you want.</div>
      <div className="deckchoices">{decks}</div>
    </div>
  );
};

export { SettingsScreen, DeckScreen };
