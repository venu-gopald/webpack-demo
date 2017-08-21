import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Component1 from './Component1/Component1';

const Routes = () => (
  <Router>
    <Route path="/" component={Component1} />
  </Router>
);

export default Routes;
