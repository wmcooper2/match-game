import React from "react";
import Button from "react-bootstrap/Button";

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

const Teams = props => {
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

const Themes = props => {
  const { changeTheme } = props;
  return (
    <Button onClick={() => changeTheme("theme")} variant="primary" block>
      Themes
    </Button>
  );
};

const Settings = props => {
  const { changeShape } = props;
  return (
    <Button onClick={() => changeShape("shape")} variant="primary" block>
      Settings
    </Button>
  );
};

const ControlPanel = props => {
  //   console.log("ControlPanel, props: ", props);
  return (
    <div className="controlpanel">
      <Teams {...props} />
      <div className="controls">
        <TeamIncDec {...props} />
        <Themes {...props} />
        <Settings {...props} />
      </div>
    </div>
  );
};

export default ControlPanel;
