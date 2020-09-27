import React from "react";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";

const CardAmountBtn = (props) => {
  const { changeScreen, currentScreen } = props;
  if (currentScreen === "card-amount") {
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
        onClick={() => changeScreen("card-amount")}
      >
        <NavLink
          to="/card-amount"
          style={{
            color: "black",
            textDecoration: "none",
            fontSize: "2rem",
            fontFamily: "var(--Font)",
            margin: "1rem 1rem",
          }}
        >
          Cards
        </NavLink>
      </button>
    );
  }
};

CardAmountBtn.propTypes = {
  changeScreen: PropTypes.func,
  currentScreen: PropTypes.string,
};

CardAmountBtn.defaultTypes = {
  changeScreen: console.log("Clicked <CardAmountBtn />"),
  currentScreen: "Default Screen",
};

export default CardAmountBtn;
