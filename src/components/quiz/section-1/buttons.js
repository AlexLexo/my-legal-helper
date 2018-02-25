import React from 'react';
//import DOMPurify from 'dompurify';
import { Button, ButtonGroup } from 'reactstrap';

const Buttons = props => {
  return (
    <ButtonGroup className="case-tool-button-group btn-group-vertical text-center">
      {props.btnvalues.map((item, i) => {
        return (
          <Button
            key={i}
            onClick={() => props.callback(item.ansId, item.nxtQId)}
            className="btn btn-primary btn-block case-tool-button"
          >
            {item.ansLabel}
          </Button>
        );
      })}
    </ButtonGroup>
  );
};
export default Buttons;
