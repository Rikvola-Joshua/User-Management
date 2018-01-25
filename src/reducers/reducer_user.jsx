import _ from 'lodash'
import { FETCH_USERS, FETCH_USER, SAVED_USER } from '../actions/index';

export default function(state = [], action) {
  switch (action.type) {
    case FETCH_USER:
      return {...state, [action.payload.data.id]: action.payload.data}
    case FETCH_USERS:
      return _.mapKeys(action.payload.data, 'id')
    case SAVED_USER:

      break;
    default:
      return state;
  }
}
