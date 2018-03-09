import React from 'react';

const Texts = props => {
  return (
    <div>
      <label htmlFor={props.q.inputs[0].qId}>Start of injury: </label>
      <input
        type="text"
        id={props.q.inputs[0].qId}
        placeholder={props.q.inputs[0].answered ? props.q.inputs[0].answered : props.q.inputs[0].placeholder}
        value={props.value}
        onChange={e => props.callback('value1', e.target.value, props.q.nxtQId)}
      />
      <br />
      <label htmlFor={props.q.inputs[1].qId}>End of Injury: </label>
      <input
        type="text"
        id={props.q.inputs[1].qId}
        placeholder={props.q.inputs[1].answered ? props.q.inputs[1].answered : props.q.inputs[1].placeholder}
        value={props.value}
        onChange={e => props.callback('value2', e.target.value, props.q.nxtQId)}
      />
    </div>
  );
};
export default Texts;
