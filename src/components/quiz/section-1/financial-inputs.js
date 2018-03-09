import React from 'react';

const FinancialInputs = props => {
  return (
    <div>
      <label htmlFor={props.q.inputs[0].qId}>{props.q.inputs[0].title}: £</label>
      <input
        type="text"
        id={props.q.inputs[0].qId}
        placeholder={props.q.inputs[0].answered ? props.q.inputs[0].answered : props.q.inputs[0].placeholder}
        value={props.value}
        onChange={e => props.callback('value1', parseInt(e.target.value, 10), props.q.nxtQId)}
      />
      <br />
      <label htmlFor={props.q.inputs[1].qId}>{props.q.inputs[1].title}: £</label>
      <input
        type="text"
        placeholder={props.q.inputs[1].answered ? props.q.inputs[1].answered : props.q.inputs[1].placeholder}
        value={props.value}
        onChange={e => props.callback('value2', parseInt(e.target.value, 10), props.q.nxtQId)}
      />
      <br />
      <label htmlFor={props.q.inputs[2].qId}>{props.q.inputs[2].title}: £</label>
      <input
        type="text"
        placeholder={props.q.inputs[2].answered ? props.q.inputs[2].answered : props.q.inputs[2].placeholder}
        value={props.value}
        onChange={e => props.callback('value3', parseInt(e.target.value, 10), props.q.nxtQId)}
      />
      <br />
      <label htmlFor={props.q.inputs[3].qId}>{props.q.inputs[3].title}: £</label>
      <input
        type="text"
        placeholder={props.q.inputs[3].answered ? props.q.inputs[3].answered : props.q.inputs[3].placeholder}
        value={props.value}
        onChange={e => props.callback('value4', parseInt(e.target.value, 10), props.q.nxtQId)}
      />
      <br />
      <label htmlFor={props.q.inputs[4].qId}>{props.q.inputs[4].title}: £</label>
      <input
        type="text"
        placeholder={props.q.inputs[4].answered ? props.q.inputs[4].answered : props.q.inputs[4].placeholder}
        value={props.value}
        onChange={e => props.callback('value5', parseInt(e.target.value, 10), props.q.nxtQId)}
      />
      <br />
      <label htmlFor={props.q.inputs[5].qId}>{props.q.inputs[5].title}: £</label>
      <input
        type="text"
        placeholder={props.q.inputs[5].answered ? props.q.inputs[5].answered : props.q.inputs[5].placeholder}
        value={props.value}
        onChange={e => props.callback('value6', parseInt(e.target.value, 10), props.q.nxtQId)}
      />
    </div>
  );
};
export default FinancialInputs;
