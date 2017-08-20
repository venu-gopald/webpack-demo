import { combineReducers } from 'redux';
import { Component1Reducer } from './Component1/Component1.Reducer';

const rootReducer = combineReducers({
  Component1Reducer,
});

export default rootReducer;
