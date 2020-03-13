import React from "react";
import InputGroup from "react-bootstrap/InputGroup";
import { Link } from "react-router-dom";

const ChangeScore = props => {
  const { handleClick, team } = props;
  return (
    <React.Fragment>
      <button onClick={() => handleClick("minus", team)}>-</button>
      <button onClick={() => handleClick("plus", team)}>+</button>
    </React.Fragment>
  );
};

const ChangeTeams = props => {
  const { handleClick } = props;
  return (
    <React.Fragment>
      <button onClick={() => handleClick("minus")}>-</button>
      <button onClick={() => handleClick("plus")}>+</button>
    </React.Fragment>
  );
};

const Team = props => {
  //   console.log("Team, props: ", props);
  const { name, score, updateTeamName } = props;
  console.log("team nameIndex: ", props);
  return (
    <div className="team">
      <input
        type="text"
        className="teamname"
        placeholder={name}
        onChange={() => updateTeamName(name)}
      ></input>
      <span className="teamscore">{score}</span>
      <ChangeScore handleClick={props.changeScore} team={name} />
    </div>
  );
};

const TeamsList = props => {
  //   console.log("Teams props: ", props);
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
  return <div className="teams">{teamsInPlay}</div>;
};

const TeamIncDec = props => {
  //   console.log("TeamIncDec, props: ", props);
  return (
    <div className="teamsbtn">
      <div>Teams</div>
      <ChangeTeams handleClick={props.changeTeams} />
    </div>
  );
};

const DecksBtn = props => {
  const { changeScreen, currentScreen } = props;
  //   console.log("DecksBtn, props: ", props);
  if (currentScreen === "decks") {
    return (
      <Link to="/">
        <button onClick={() => changeScreen("/")} variant="primary" block>
          Game
        </button>
      </Link>
    );
  } else {
    return (
      <Link to="/decks">
        <button onClick={() => changeScreen("decks")} variant="primary" block>
          Vocab
        </button>
      </Link>
    );
  }
};

const SettingsBtn = props => {
  //   console.log("SettingsBtn, props: ", props);
  const { changeScreen, currentScreen } = props;
  if (currentScreen === "settings") {
    return (
      <Link to="/">
        <button onClick={() => changeScreen("/")} variant="primary" block>
          Game
        </button>
      </Link>
    );
  } else {
    return (
      <Link to="settings">
        <button
          onClick={() => changeScreen("settings")}
          variant="primary"
          block
        >
          Cards
        </button>
      </Link>
    );
  }
};

const ControlPanel = props => {
  //   console.log("ControlPanel, props: ", props);
  //   const { deckName } = props;
  const { updateTeamName } = props;
  return (
    <div className="controlpanel">
      <InputGroup>
        <TeamsList {...props} updateTeamName={updateTeamName} />
        {/* <div className="deckinplay">{deckName}</div> */}
      </InputGroup>
      <div className="instructions">
        Choose a vocab set and how many cards before playing.
      </div>
      <div className="controls">
        <TeamIncDec {...props} />
        <DecksBtn {...props} />
        <SettingsBtn {...props} />
      </div>
    </div>
  );
};

export default ControlPanel;
