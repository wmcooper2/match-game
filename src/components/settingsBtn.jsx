import React from "react";
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
          }}
        >
          Cards
        </NavLink>
      </button>
    );
  }
};

export default SettingsBtn;
