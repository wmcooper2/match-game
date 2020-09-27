import React from "react";

const BoardShapeScreen = (props) => {
  console.log("BoardShapeScreen:", props);
  const { changeBoardShape, choices } = props;
  let options = [];
  choices.forEach((choice) => {
    options.push(
      <button
        key={choice.size}
        className="option"
        onClick={() => changeBoardShape(choice.size)}
      >
        {choice.size}
      </button>
    );
  });
  return <div className="options"> {options.reverse()} </div>;
};

const VocabScreen = (props) => {
  const { changeVocab, choices } = props;
  let options = [];
  choices.forEach((choice) =>
    options.push(
      <button
        key={choice.name}
        className="option"
        onClick={() => changeVocab(choice.name)}
      >
        {choice.name}
      </button>
    )
  );

  return <div className="options"> {options} </div>;
};

export { VocabScreen, BoardShapeScreen };
