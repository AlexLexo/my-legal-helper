import React from 'react';

const Weak = props => {
  return (
    <div className="weak text-justify">
      <p>{props.q.reason}</p>
    </div>
  );
};

export default Weak;
