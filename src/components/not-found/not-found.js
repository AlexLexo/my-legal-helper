import React from 'react';
import { pageView } from './../../services/ga-helpers';

export default () => {
  pageView(window.location.pathname);
  return (
    <div className="not-found">
      <h3>Sorry, page not found!</h3>
    </div>
  );
};
