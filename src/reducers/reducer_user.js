import { FETCH_USER } from '../actions/index';

export default function(state = [], action) {
  switch (action.type) {
    case FETCH_USER:
      // Following same like: return state.concat([action.payload.data]);
      return [ action.payload.data, ...state ];
  }
  return state;
}
