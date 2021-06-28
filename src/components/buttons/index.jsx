import React from "react";
import { Button } from "react-bootstrap";

const Buttons = (props) => {
  return (
    <Button
      className="font-weight-bold ml-4"
      variant={props.variant}
      size="sm"
      onClick={props.onclick}
    >
      {props.sign}
    </Button>
  );
};

export default Buttons;
