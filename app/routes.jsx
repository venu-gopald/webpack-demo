import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './Home/Home';
import Component1 from './Component1/Component1';

const Routes = () => (
  <main>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/Component1" component={Component1} />
    </Switch>
  </main>
);

export default Routes;
