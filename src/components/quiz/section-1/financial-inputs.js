import React from 'react';

const styles = {
  paddingTop: '10px',
  paddingBottom: '10px',
  marginTop: '10px',
  fontSize: '1.2rem',
  height: '60px'
};

const FinancialInputs = props => {
  const handleChange = e => {
    const val = e.target.value === undefined ? 0 : e.target.value.replace(/^0+(?!\.|$)/, '');
    props.callback(e.target.name, val, props.q.nxtQId);
  };
  return (
    <div className="financial-inputs">
      <label htmlFor={props.q.inputs[0].qId}>{props.q.inputs[0].title}: £</label>
      <input
        type="number"
        style={styles}
        id={props.q.inputs[0].qId}
        name="value1"
        onChange={e => {
          handleChange(e);
        }}
      />
      <br />
      <label htmlFor={props.q.inputs[1].qId}>{props.q.inputs[1].title}: £</label>
      <input
        type="number"
        style={styles}
        name="value2"
        onChange={e => {
          handleChange(e);
        }}
      />
      <br />
      <label htmlFor={props.q.inputs[2].qId}>{props.q.inputs[2].title}: £</label>
      <input
        type="number"
        style={styles}
        name="value3"
        onChange={e => {
          handleChange(e);
        }}
      />
      <br />
      <label htmlFor={props.q.inputs[3].qId}>{props.q.inputs[3].title}: £</label>
      <input
        type="number"
        style={styles}
        name="value4"
        onChange={e => {
          handleChange(e);
        }}
      />
      <br />
      <label htmlFor={props.q.inputs[4].qId}>{props.q.inputs[4].title}: £</label>
      <input
        type="number"
        style={styles}
        name="value5"
        onChange={e => {
          handleChange(e);
        }}
      />
      <br />
      <label htmlFor={props.q.inputs[5].qId}>{props.q.inputs[5].title}: £</label>
      <input
        type="number"
        style={styles}
        name="value6"
        onChange={e => {
          handleChange(e);
        }}
      />
    </div>
  );
};
export default FinancialInputs;
