import React from "react";

const Card = props => {
  //   console.log("CardID: ", props.cardID);
  const { card, handleClick } = props;
  return (
    <div className="card" onClick={() => handleClick(card)}>
      {card}
    </div>
  );
};

const Row = props => {
  console.log("Row, props: ", props);
  const { boardShape, deck, rowID, handleClick } = props;
  //   console.log(rowID);
  let rowCards = [];
  for (let i = 0; i < boardShape.x; i++) {
    rowCards.push(
      <Card
        key={boardShape.x * rowID + i}
        cardID={boardShape.x * rowID + i}
        card={deck[boardShape.x * rowID + i]}
        handleClick={handleClick}
      />
    );
  }
  return <div className="row">{rowCards}</div>;
};

//boardshape not updating with the new shape and not being passed to the rows
const BoardGame = props => {
  console.log("BoardGame, props: ", props);
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
