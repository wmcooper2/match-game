import React from "react";
import { NavLink } from "react-router-dom";

const VocabBtn = (props) => {
  const { changeScreen, currentScreen } = props;
  if (currentScreen === "decks") {
    return (
      <button className="screen-change-btn" onClick={() => changeScreen("/")}>
        <NavLink
          to="/"
          style={{
            color: "black",
            textDecoration: "none",
            fontSize: "2rem",
            fontFamily: "var(--Font)",
            margin: "1rem 1rem",
          }}
        >
          Game
        </NavLink>
      </button>
    );
  } else {
    return (
      <button
        className="screen-change-btn"
        onClick={() => changeScreen("decks")}
      >
        <NavLink
          to="/vocab"
          style={{
            color: "black",
            textDecoration: "none",
            fontSize: "2rem",
            fontFamily: "var(--Font)",
            margin: "1rem 1rem",
          }}
        >
          Vocabulary
        </NavLink>
      </button>
    );
  }
};

export default VocabBtn;
