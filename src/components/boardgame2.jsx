import React from "react";
import ReactCardFlip from "react-card-flip";

const FlipCardFront = (props) => {
  const { cardID, handleClick } = props;
  return (
    <div className="card card-front" onClick={() => handleClick(cardID)}>
      {cardID + 1}
    </div>
  );
};

const FlipCardBack = (props) => {
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

const boardClass = (board) => {
  switch (board.size) {
    case 8:
      return "eight";
      break;
    case 10:
      return "ten";
      break;
    case 12:
      return "twelve";
      break;
    case 16:
      return "sixteen";
      break;
    case 18:
      return "eighteen";
      break;
    case 20:
      return "twenty";
      break;
    case 24:
      return "twentyfour";
      break;
    default:
      return "eight";
      break;
  }
};

const Card = (props) => {
  const { card } = props;
  return (
    <ReactCardFlip isFlipped={card.flipped} flipDirection="horizontal">
      <FlipCardFront {...props} />
      <FlipCardBack {...props} />
    </ReactCardFlip>
  );
};

const BoardGame = (props) => {
  console.log("Board Props: ", props);
  const { boardShape, deck } = props;
  let cards = [];
  for (let i = 0; i < boardShape.size; i++) {
    cards.push(<Card key={i} card={deck[i]} cardID={i} {...props} />);
  }
  console.log("Cards: ", cards);
  let board = boardClass(boardShape);
  console.log("boardClass: ", board);
  board = `board boardTwo-${board}`;

  //   return <div className="boardTwo-eight">{cards}</div>;
  //   return <div className={`boardTwo-${board}`}>{cards}</div>;
  return <div className={board}>{cards}</div>;
};

export default BoardGame;
