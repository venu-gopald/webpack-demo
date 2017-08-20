import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import Root from './Root/Root';

ReactDOM.render((
  <BrowserRouter>
    <Root />,
  </BrowserRouter>
), document.getElementById('react-root'),
);
