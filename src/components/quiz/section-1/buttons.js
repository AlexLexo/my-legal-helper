import React from 'react';
//import DOMPurify from 'dompurify';
import { Button, ButtonGroup } from 'reactstrap';

const Buttons = props => {
  return (
    <ButtonGroup vertical className="case-tool-button-group">
      {props.btnvalues.map((item, i) => {
        return (
          <Button
            key={i}
            onClick={() => props.callback(item.ansId, item.nxtQId)}
            className="btn btn btn-outline-warning case-tool-button"
          >
            {item.ansLabel}
          </Button>
        );
      })}
    </ButtonGroup>
  );
};
export default Buttons;
