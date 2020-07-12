import React from "react";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";

const SettingsBtn = (props) => {
  const { changeScreen, currentScreen } = props;
  if (currentScreen === "settings") {
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
        onClick={() => changeScreen("settings")}
      >
        <NavLink
          to="settings"
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

SettingsBtn.propTypes = {
  changeScreen: PropTypes.func,
  currentScreen: PropTypes.string,
};

SettingsBtn.defaultTypes = {
  changeScreen: console.log("Clicked <SettingsBtn />"),
  currentScreen: "Default Screen",
};

export default SettingsBtn;
