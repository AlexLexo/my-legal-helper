import React from 'react';

const Dates = props => {
  return (
    <input
      type="date"
      placeholder={props.q.answered ? props.q.answered : props.q.placeholder}
      value={props.value}
      onChange={e => props.callback(e.target.value, props.q.nxtQId)}
    />
  );
};
export default Dates;
