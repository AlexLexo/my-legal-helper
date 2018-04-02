import React from 'react';
//import DOMPurify from 'dompurify';
import { ButtonGroup } from 'reactstrap';

const Buttons = props => {
  return (
    <ButtonGroup className="case-tool-button-group btn-group-vertical text-center">
      {props.q.btnvalues.map((item, i) => {
        return (
          <button
            key={i}
            type="submit"
            onClick={() => {
              props.callback(item.ansId, item.nxtQId);
            }}
            className="btn btn-primary btn-block case-tool-button"
          >
            {item.ansLabel}
          </button>
        );
      })}
    </ButtonGroup>
  );
};
export default Buttons;
