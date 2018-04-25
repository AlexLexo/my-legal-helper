import React from 'react';

const Autotab = props => {
  const styles = {
    display: 'inline-block',
    width: '3.2rem',
    padding: '1rem 1.4rem 1rem 1.4rem',
    border: 'none',
    fontSize: '1.4rem',
    background: 'none',
    color: '#000'
  };

  const handleTab = e => {
    if (e.target.value.length < props.maxLength) return;
    const next = e.target.nextElementSibling;
    while (e.target.nextElementSibling) {
      if (next.tagName.toLowerCase() === 'input') {
        next.focus();
        break;
      } else break;
    }
  };

  return (
    <input
      type={props.type}
      name={props.name}
      placeholder={props.hint}
      maxLength={props.maxLength}
      defaultValue={props.value}
      onKeyUp={props.maxLength ? handleTab : null}
      autoFocus={props.autoFocus}
      onChange={props.onChange}
      style={styles}
    />
  );
};

export default Autotab;
