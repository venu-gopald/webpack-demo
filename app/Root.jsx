import React from 'react';
import { Provider } from 'react-redux';
import ConfigureStore from './Store/ConfigureStore';
import Home from './Home/Home';

const store = ConfigureStore();

const Root = () => (
  <Provider store={store}>
    <Home />
  </Provider>
);

export default Root;
