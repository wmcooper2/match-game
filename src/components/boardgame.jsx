import React from "react";

const Card = props => {
  console.log("CardID: ", props.cardID);
  return <div className="card">card</div>;
};

const Row = props => {
  const { boardShape, cards, rowID } = props;
  console.log(rowID);
  let rowCards = [];
  for (let i = 0; i < cards.length / boardShape.y; i++) {
    rowCards.push(
      <Card
        key={boardShape.x * rowID + i}
        {...props}
        cardID={boardShape.x * rowID + i}
      />
    );
  }
  return <div className="row">{rowCards}</div>;
};

const BoardGame = props => {
  const { boardShape } = props;
  const boardRows = boardShape.y;
  let rows = [];
  for (let i = 0; i < boardRows; i++) {
    rows.push(<Row key={i} {...props} rowID={i} />);
  }
  return <div className="board">{rows}</div>;
};

export default BoardGame;
