import React from 'react';
import { FormattedDate } from 'react-intl';

const DisplayDate = () => (
  <div>
    <h2>Display Date</h2>
    <p>Today is {' '} <FormattedDate value={Date.now()} /></p>
  </div>
);
export default DisplayDate;
