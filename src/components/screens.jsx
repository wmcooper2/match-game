import React from "react";
import Button from "react-bootstrap/Button";

const SettingsScreen = props => {
  console.log("SettingsScreen, props: ", props);
  const { changeShape, choices } = props;
  let shapes = [];
  choices.forEach(choice => {
    shapes.push(
      <Button
        key={choice.size}
        className="deck"
        onClick={() => changeShape(choice.size)}
      >
        {choice.size}
      </Button>
    );
  });

  return (
    <div className="screen">
      <div className="instructions">Choose the number of cards you want.</div>
      {shapes.reverse()}
    </div>
  );
};

const ThemesScreen = props => {
  // console.log("ThemesScreen, props: ", props);
  const { changeDeck, choices } = props;
  let decks = [];
  choices.forEach(choice =>
    decks.push(
      <Button
        key={choice.name}
        className="deck"
        onClick={() => changeDeck(choice.name)}
      >
        {choice.name}
      </Button>
    )
  );

  return <div className="screen">{decks}</div>;
};

export { SettingsScreen, ThemesScreen };
