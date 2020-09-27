import React from "react";
import ReactCardFlip from "react-card-flip";

const FlipCardFront = (props) => {
  const { cardID, handleClick } = props;
  return (
    <img
      src={process.env.PUBLIC_URL + "/front.jpg"}
      alt="front"
      onClick={() => handleClick(cardID)}
    ></img>
  );
};

const FlipCardBack = (props) => {
  const { card, cardID, handleClick } = props;
  return (
    <img src={card.image} alt={card.image} onClick={() => handleClick(cardID)}></img>
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
  console.log("Card: ", card);
  return (
    <div className="card">
      <ReactCardFlip isFlipped={card.flipped} flipDirection="horizontal">
        <FlipCardFront {...props} />
        <FlipCardBack {...props} />
      </ReactCardFlip>
    </div>
  );
};

const BoardGame = (props) => {
  const { boardShape, deck } = props;
  let cards = [];
  console.log("BoardGame: ", boardShape.size);
  for (let i = 0; i < boardShape.size; i++) {
    cards.push(<Card key={i} card={deck[i]} cardID={i} {...props} />);
  }

  let board = boardClass(boardShape);
  board = `board board-${board}`;
  return <div className={board}>{cards}</div>;
};

export default BoardGame;
