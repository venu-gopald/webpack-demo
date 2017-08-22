import React from 'react';
import { Route } from 'react-router-dom';
import { routes } from './../routes';
import Sidebar from './../Common/Sidebar';
import Header from './../Common/Header';
import Footer from './../Common/Footer';
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
    { Header }
    <div className="topcontainer">
      { Sidebar }
      <div className="maincontainer">
        { eachRoute() }
      </div>
    </div>
    { Footer }
  </div>
);
export default Home;

// <h1>Webpack2 Demo with React and Redux</h1>
