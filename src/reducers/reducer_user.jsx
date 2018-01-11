import _ from 'lodash'
import { FETCH_USERS } from '../actions/index';

export default function(state = [], action) {
  switch (action.type) {
    case FETCH_USERS:
      // Following same like: return state.concat([action.payload.data]);
      // return [...action.payload.data];
      //-------------
      return _.mapKeys(action.payload.data, 'id')
  }
  return state;
}
