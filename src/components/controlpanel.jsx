import React from "react";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";

const ChangeScore = (props) => {
  const { handleClick, teamName } = props;
  return (
    <div>
      <button className="incdec" onClick={() => handleClick("minus", teamName)}>
        -
      </button>
      <button className="incdec" onClick={() => handleClick("plus", teamName)}>
        +
      </button>
    </div>
  );
};

ChangeScore.propTypes = {
  handleClick: PropTypes.func,
  team: PropTypes.string,
};

ChangeScore.defaultProps = {
  handleClick: console.log("Clicked <ChangeScore />."),
  team: "Default team in <ChangeScore />",
};

const Team = (props) => {
  const { teamName, score, updateTeamName, changeScore } = props;
  return (
    <div className="team">
      <input
        type="text"
        className="name"
        placeholder={teamName}
        onChange={() => updateTeamName(teamName)}
      ></input>
      <span className="score">{score}</span>
      <ChangeScore handleClick={changeScore} teamName={teamName} />
    </div>
  );
};

Team.propTypes = {
  teamName: PropTypes.string,
  score: PropTypes.string,
  updateTeamName: PropTypes.func,
  changeScore: PropTypes.func,
};

Team.defaultProps = {
  teamName: "Default teamName in <Team />",
  score: "Default score in <Team />",
  updateTeamName: console.log("Clicked updateTeamName(), <Team />"),
  changeScore: console.log("Clicked updateTeamName(), <Team />"),
};

const TeamsList = (props) => {
  const { teams, teamCount, updateTeamName } = props;
  let teamsInPlay = [];
  for (let i = 0; i < teamCount; i++) {
    teamsInPlay.push(
      <Team
        key={i}
        teamName={teams[i].name}
        score={teams[i].score}
        updateTeamName={updateTeamName}
        nameIndex={i}
        {...props}
      />
    );
  }
  return <div className="teamlist">{teamsInPlay}</div>;
};

TeamsList.propTypes = {
  teams: PropTypes.array,
  teamCount: PropTypes.number,
  updateTeamName: PropTypes.func,
};

TeamsList.defaultProps = {
  teams: [],
  teamCount: 4,
  updateTeamName: console.log("Clicked, <TeamsList />"),
};

const AddRemoveTeam = (props) => {
  const { teamIncDec } = props;
  return (
    <div className="add-remove-teams">
      <button className="incdec" onClick={() => teamIncDec("minus")}>
        -
      </button>
      <span>Teams</span>
      <button className="incdec" onClick={() => teamIncDec("plus")}>
        +
      </button>
    </div>
  );
};

AddRemoveTeam.propTypes = {
  teamIncDec: PropTypes.func,
};

AddRemoveTeam.defaultProps = {
  teamIncDec: console.log("Clicked, <AddRemoveTeams />"),
};

const DecksBtn = (props) => {
  const { changeScreen, currentScreen } = props;
  if (currentScreen === "decks") {
    return (
      <button className="screen-change-btn" onClick={() => changeScreen("/")}>
        <NavLink to="/">Game</NavLink>
      </button>
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

DecksBtn.propTypes = {
  changeScreen: PropTypes.func,
  currentScreen: PropTypes.func,
};

DecksBtn.defaultProps = {
  changeScreen: console.log("Clicked <DecksBtn />"),
  currentScreen: console.log("Clicked <DecksBtn />"),
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

SettingsBtn.propTypes = {
  changeScreen: PropTypes.func,
  currentScreen: PropTypes.func,
};

SettingsBtn.defaultProps = {
  changeScreen: console.log("Clicked <DecksBtn />"),
  currentScreen: console.log("Clicked <DecksBtn />"),
};

const ControlPanel = (props) => {
  const { updateTeamName } = props;
  return (
    <div className="controlpanel">
      {/* <TeamsList {...props} updateTeamName={updateTeamName} /> */}
      <div className="controls">
        {/* <AddRemoveTeam {...props} /> */}
        <DecksBtn {...props} />
        <SettingsBtn {...props} />
      </div>
    </div>
  );
};

ControlPanel.propTypes = {
  updateTeamName: PropTypes.func,
};

ControlPanel.defaultProps = {
  updateTeamName: console.log("Clicked <ControlPanel />"),
};

export default ControlPanel;
