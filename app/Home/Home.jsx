import React from 'react';
import { Route } from 'react-router-dom';
import { routes } from './../routes';
import Sidebar from './../Common/Sidebar';
import '../Styles/main.scss';

const eachRoute = () => (
  routes.map(route => (
    <Route
      key={route._pathId}
      path={route.path}
      exact={route.exact}
      component={route.component}
    />
  ))
);
const Home = () => (
  <div>
    <h1>Webpack2 Demo with React and Redux</h1>
    { Sidebar }
    <div style={{ flex: 1, padding: '10px' }}>
      { eachRoute() }
    </div>
  </div>
);
export default Home;
