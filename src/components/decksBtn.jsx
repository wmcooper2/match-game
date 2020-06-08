import React from "react";
import { NavLink } from "react-router-dom";

const DecksBtn = (props) => {
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
          }}
          // activeStyle={{
          // fontWeight: "bold",
          // color: "red",
          // }}
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
          to="/decks"
          style={{
            color: "black",
            textDecoration: "none",
            fontSize: "2rem",
            fontFamily: "var(--Font)",
          }}
        >
          Vocabulary
        </NavLink>
      </button>
    );
  }
};

export default DecksBtn;
