import { RECEIVE_USER } from '../../../actions/user_actions';
import { merge } from 'lodash';

export default (state = {} , action) => {
  Object.freeze(state);
  switch(action.type){

    case RECEIVE_USER:
      newUser = {[action.user.id]: action.user};
      return merge({},state,newUser);
    default:
      return state;
  }
}
