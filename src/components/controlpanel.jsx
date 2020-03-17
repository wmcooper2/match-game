import React from "react";
import { Link } from "react-router-dom";

const ChangeScore = props => {
  const { handleClick, team } = props;
  return (
    <React.Fragment>
      <button className="incdec" onClick={() => handleClick("minus", team)}>
        -
      </button>
      <button className="incdec" onClick={() => handleClick("plus", team)}>
        +
      </button>
    </React.Fragment>
  );
};

const Team = props => {
  const { name, score, updateTeamName, changeScore } = props;
  return (
    <div className="team">
      <input
        type="text"
        className="name"
        placeholder={name}
        onChange={() => updateTeamName(name)}
      ></input>
      <span className="score">{score}</span>
      <ChangeScore handleClick={changeScore} team={name} />
    </div>
  );
};

const TeamsList = props => {
  const { teams, teamCount, updateTeamName } = props;
  let teamsInPlay = [];
  for (let i = 0; i < teamCount; i++) {
    teamsInPlay.push(
      <Team
        key={i}
        name={teams[i].name}
        score={teams[i].score}
        updateTeamName={updateTeamName}
        nameIndex={i}
        {...props}
      />
    );
  }
  return <div className="teamlist">{teamsInPlay}</div>;
};

const AddRemoveTeam = props => {
  return (
    <div className="add-remove-teams">
      <button className="incdec" onClick={() => props.teamIncDec("minus")}>
        -
      </button>
      <span>Teams</span>
      <button className="incdec" onClick={() => props.teamIncDec("plus")}>
        +
      </button>
    </div>
  );
};

const DecksBtn = props => {
  const { changeScreen, currentScreen } = props;
  if (currentScreen === "decks") {
    return (
      <button className="screen-change-btn" onClick={() => changeScreen("/")}>
        <Link to="/">Game</Link>
      </button>
    );
  } else {
    return (
      <button
        className="screen-change-btn"
        onClick={() => changeScreen("decks")}
      >
        <Link to="/decks">Vocab</Link>
      </button>
    );
  }
};

const SettingsBtn = props => {
  const { changeScreen, currentScreen } = props;
  if (currentScreen === "settings") {
    return (
      <button className="screen-change-btn" onClick={() => changeScreen("/")}>
        <Link to="/">Game</Link>
      </button>
    );
  } else {
    return (
      <button
        className="screen-change-btn"
        onClick={() => changeScreen("settings")}
      >
        <Link to="settings">Cards</Link>
      </button>
    );
  }
};

const ControlPanel = props => {
  const { updateTeamName } = props;
  return (
    <div className="controlpanel">
      <TeamsList {...props} updateTeamName={updateTeamName} />
      {/* <div className="deckinplay">{deckName}</div> */}
      <div className="instructions">
        Choose a vocab set and how many cards before playing.
      </div>
      <div className="controls">
        <AddRemoveTeam {...props} />
        <DecksBtn {...props} />
        <SettingsBtn {...props} />
      </div>
    </div>
  );
};

export default ControlPanel;
