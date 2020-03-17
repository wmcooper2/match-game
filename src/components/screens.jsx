import React from "react";

const BoardShapeScreen = props => {
  const { changeBoardShape, choices } = props;
  let shapes = [];
  choices.forEach(choice => {
    shapes.push(
      <button
        key={choice.size}
        className="deck"
        onClick={() => changeBoardShape(choice.size)}
      >
        {choice.size}
      </button>
    );
  });

  return <div className="screen"> {shapes.reverse()} </div>;
};

const VocabScreen = props => {
  const { changeVocab, choices } = props;
  let decks = [];
  choices.forEach(choice =>
    decks.push(
      <button
        key={choice.name}
        className="deck"
        onClick={() => changeVocab(choice.name)}
      >
        {choice.name}
      </button>
    )
  );

  return <div className="screen"> {decks} </div>;
};

export { VocabScreen, BoardShapeScreen };
