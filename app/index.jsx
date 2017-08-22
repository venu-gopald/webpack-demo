import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { IntlProvider } from 'react-intl';
import Root from './Root';

ReactDOM.render(
  <IntlProvider locale="en">
    <BrowserRouter>
      <Root />
    </BrowserRouter>
  </IntlProvider>,
  document.getElementById('root'),
);
