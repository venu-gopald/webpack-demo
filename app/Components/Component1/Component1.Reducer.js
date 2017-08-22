import {
  ADD_DATA,
  DELETE_DATA,
  CLEAR_STORE,
} from './Component1.Constants';

const initialState = {
  data: [],
  text: '',
};

export default function Component1Reducer(state = initialState, action) {
  switch (action.type) {
    case ADD_DATA:
      return Object.assign({}, state);

    case DELETE_DATA:
      return Object.assign({}, state);

    case CLEAR_STORE:
      return Object.assign({}, initialState);

    default:
      return state;
  }
}
