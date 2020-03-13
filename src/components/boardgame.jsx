import React from "react";
import ReactCardFlip from "react-card-flip";

const FlipCardFront = props => {
  const { cardID, handleClick } = props;
  return (
    <div
      className="card card-front"
      onClick={() => handleClick(cardID)}
    >
      {cardID + 1}
    </div>
  );
};

const FlipCardBack = props => {
  const { card, cardID, handleClick } = props;
  return (
    <img
      onClick={() => handleClick(cardID)}
      className="card card-back"
      src={card.image}
      alt="card"
      style={{ border: "none" }}
    ></img>
  );
};

const FlipCard = props => {
  const { card } = props;
  return (
    <ReactCardFlip isFlipped={card.flipped} flipDirection="horizontal">
      <FlipCardFront {...props} />
      <FlipCardBack {...props} />
    </ReactCardFlip>
  );
};

const Row = props => {
  const { boardShape, deck, rowID, handleClick } = props;
  let rowCards = [];
  for (let i = 0; i < boardShape.x; i++) {
    rowCards.push(
      <FlipCard
        key={boardShape.x * rowID + i}
        cardID={boardShape.x * rowID + i}
        card={deck[boardShape.x * rowID + i]}
        handleClick={handleClick}
      />
    );
  }
  return <div className="row">{rowCards}</div>;
};

const BoardGame = props => {
  const { boardShape, deck } = props;
  let rows = [];
  for (let i = 0; i < boardShape.y; i++) {
    rows.push(
      <Row key={i} deck={deck} boardShape={boardShape} {...props} rowID={i} />
    );
  }
  return <div className="board">{rows}</div>;
};

export default BoardGame;
