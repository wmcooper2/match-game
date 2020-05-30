import React from "react";
import { NavLink, Link } from "react-router-dom";

const ChangeScore = (props) => {
  const { handleClick, team, score } = props;
  return (
    <div className="scoreControl">
      <div className="incdec" onClick={() => handleClick("minus", team)}>
        -
      </div>
      <span className="score">{score}</span>
      <div className="incdec" onClick={() => handleClick("plus", team)}>
        +
      </div>
    </div>
  );
};

const Team = (props) => {
  const { name, updateTeamName } = props;
  return (
    <div className="team">
      <input
        type="text"
        className="name"
        placeholder={name}
        onChange={() => updateTeamName(name)}
      ></input>
    </div>
  );
};

const TeamsList = (props) => {
  const { teams, teamCount, updateTeamName, changeScore, name } = props;
  let teamsInPlay = [];
  for (let i = 0; i < teamCount; i++) {
    teamsInPlay.push(
      <div className="aTeam">
        <Team
          key={i}
          name={teams[i].name}
          updateTeamName={updateTeamName}
          nameIndex={i}
          {...props}
        />
        <ChangeScore
          handleClick={changeScore}
          team={name}
          score={teams[i].score}
        />
      </div>
    );
  }
  return <div className="teamlist">{teamsInPlay}</div>;
};

const AddRemoveTeam = (props) => {
  return (
    <div className="add-remove-teams">
      <span>Teams</span>
      <div className="incdec" onClick={() => props.teamIncDec("minus")}>
        -
      </div>
      <div className="incdec" onClick={() => props.teamIncDec("plus")}>
        +
      </div>
    </div>
  );
};

const DecksBtn = (props) => {
  const { changeScreen, currentScreen } = props;
  if (currentScreen === "decks") {
    return (
      <div className="screen-change-btn" onClick={() => changeScreen("/")}>
        <NavLink style={{ textDecoration: "none", color: "black" }} to="/"> Game </NavLink>
      </div>
    );
  } else {
    return (
      <div className="screen-change-btn" onClick={() => changeScreen("decks")}>
        <NavLink style={{ textDecoration: "none", color: "black" }} to="/vocab">
          Vocab
        </NavLink>
      </div>
    );
  }
};

const SettingsBtn = (props) => {
  const { changeScreen, currentScreen } = props;
  if (currentScreen === "settings") {
    return (
      <div className="screen-change-btn" onClick={() => changeScreen("/")}>
        <NavLink style={{ textDecoration: "none", color: "black" }} to="/">
          Game
        </NavLink>
      </div>
    );
  } else {
    return (
      <div
        className="screen-change-btn"
        onClick={() => changeScreen("settings")}
      >
        <NavLink style={{ textDecoration: "none", color: "black" }} to="/cards">
          Cards
        </NavLink>
      </div>
    );
  }
};

const ControlPanel = (props) => {
  const { updateTeamName } = props;
  return (
    <div className="controlpanel">
      <TeamsList {...props} updateTeamName={updateTeamName} />
      <div className="controls">
        <AddRemoveTeam {...props} />
        <DecksBtn {...props} />
        <SettingsBtn {...props} />
      </div>
    </div>
  );
};

export default ControlPanel;
