import React from "react";
import Button from "react-bootstrap/Button";

const IncDec = props => {
  const { changeShape } = props;
  return (
    <React.Fragment>
      <Button onClick={() => changeShape("minus")}>-</Button>
      <Button onClick={() => changeShape("plus")}>+</Button>
    </React.Fragment>
  );
};

const ChangeTeams = props => {
  const { changeTeam } = props;
  return (
    <React.Fragment>
      <Button onClick={() => changeTeam("minus")}>-</Button>
      <Button onClick={() => changeTeam("plus")}>+</Button>
    </React.Fragment>
  );
};

const Team = props => {
  return (
    <div className="team">
      <div>Name</div>
      <div>Score</div>
      <IncDec {...props} />
    </div>
  );
};

const Teams = props => {
  console.log("Team props: ", props);
  const { teamCount } = props;
  let teams = [];
  for (let i = 0; i < teamCount; i++) {
    teams.push(<Team key={i} {...props} />);
  }
  return <div className="teams">{teams}</div>;
};

const TeamIncDec = props => {
  return (
    <div className="teamsbtn">
      <div>Teams</div>
      <ChangeTeams {...props} />
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
  console.log("ControlPanel, props: ", props);
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
