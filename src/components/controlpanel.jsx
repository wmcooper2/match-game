import React from "react";
import Button from "react-bootstrap/Button";

const Teams = props => {
  return <div>Team</div>;
};

const Themes = props => {
  return <Button variant="primary">Themes</Button>;
};

//bootstrap stylings not working properly...?
const Settings = props => {
  return <Button variant="primary">Settings</Button>;
};

const ControlPanel = props => {
  return (
    <div className="controls">
      <Teams />
      <Themes />
      <Settings />
    </div>
  );
};

export default ControlPanel;
