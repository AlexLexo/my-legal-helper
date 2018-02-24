import React from 'react';

const Texts = props => {
  return (
    <input
      type="text"
      placeholder={props.q.answered ? props.q.answered : props.q.placeholder}
      value={props.value}
      onChange={e => props.callback(e.target.value, props.q.nxtQId)}
    />
  );
};
export default Texts;
