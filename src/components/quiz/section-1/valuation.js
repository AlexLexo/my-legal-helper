import React from 'react';
import DOMPurify from 'dompurify';

const Valuation = props => {
  const valuation = { __html: DOMPurify.sanitize(props.q.valuation) };
  return (
    <div className="weak text-justify">
      <p dangerouslySetInnerHTML={valuation} />
    </div>
  );
};

export default Valuation;
