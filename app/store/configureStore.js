import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import rootreducer from './../rootreducer';

export default function ConfigureStore(preloadedState) {
  return createStore(
    rootreducer,
    preloadedState,
    applyMiddleware(
      thunkMiddleware,
    ),
  );
}
