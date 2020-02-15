import React from "react";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

const ChangeScore = props => {
  const { handleClick, team } = props;
  return (
    <React.Fragment>
      <Button onClick={() => handleClick("minus", team)}>-</Button>
      <Button onClick={() => handleClick("plus", team)}>+</Button>
    </React.Fragment>
  );
};

const ChangeTeams = props => {
  const { handleClick } = props;
  return (
    <React.Fragment>
      <Button onClick={() => handleClick("minus")}>-</Button>
      <Button onClick={() => handleClick("plus")}>+</Button>
    </React.Fragment>
  );
};

const Team = props => {
  //   console.log("Team, props: ", props);
  const { name, score } = props;
  return (
    <div className="team">
      <div className="teamname">{name}</div>
      <div className="teamscore">{score}</div>
      <ChangeScore handleClick={props.changeScore} team={name} />
    </div>
  );
};

const TeamsList = props => {
  //   console.log("Teams props: ", props);
  const { teams } = props;
  const { teamCount } = props;
  let teamsInPlay = [];
  for (let i = 0; i < teamCount; i++) {
    teamsInPlay.push(
      <Team key={i} name={teams[i].name} score={teams[i].score} {...props} />
    );
  }
  //   console.log("teams: ", teams);
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

const ThemesBtn = props => {
  const { changeScreen, currentScreen } = props;
  //   console.log("Themes, props: ", props);
  if (currentScreen === "themes") {
    return (
      <Link to="/game">
        <Button onClick={() => changeScreen("game")} variant="primary" block>
          Game
        </Button>
      </Link>
    );
  } else {
    return (
      <Link to="/themes">
        <Button onClick={() => changeScreen("themes")} variant="primary" block>
          Themes
        </Button>
      </Link>
    );
  }
};

const SettingsBtn = props => {
  const { changeScreen, currentScreen } = props;
  if (currentScreen === "settings") {
    return (
      <Link to="game">
        <Button onClick={() => changeScreen("game")} variant="primary" block>
          Game
        </Button>
      </Link>
    );
  } else {
    return (
      <Link to="settings">
        <Button
          onClick={() => changeScreen("settings")}
          variant="primary"
          block
        >
          Settings
        </Button>
      </Link>
    );
  }
};

const ControlPanel = props => {
  //   console.log("ControlPanel, props: ", props);
  return (
    <div className="controlpanel">
      <TeamsList {...props} />
      <div className="controls">
        <TeamIncDec {...props} />
        <ThemesBtn {...props} />
        <SettingsBtn {...props} />
      </div>
    </div>
  );
};

export default ControlPanel;
