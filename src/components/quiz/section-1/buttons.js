import React from 'react';
//import DOMPurify from 'dompurify';

const Buttons = props => {
  return (
    <div className="case-tool-button-group text-center">
      {props.q.btnvalues.map((item, i) => {
        return (
          <button
            key={i}
            type="submit"
            onClick={() => {
              props.callback(item.ansId, item.nxtQId);
            }}
            className="btn btn-primary case-tool-button"
          >
            {item.ansLabel}
          </button>
        );
      })}
    </div>
  );
};
export default Buttons;
