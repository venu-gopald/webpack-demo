import React from 'react';
import { Router, Route } from 'react-router';
import { Home } from './Home/Home';
import { Component1 } from './Component1/Component1';

const routes = () => (
  <Router>
    <Route path="/" component={Home} />
    <Route path="/Component1" component={Component1} />
  </Router>
);

export default routes;
