import { RECEIVE_USER } from '../../../actions/user_actions';
import { RECEIVE_SESSION } from '../../../actions/session_actions';
import { merge } from 'lodash';

export default (state = {} , action) => {
  Object.freeze(state);
  switch(action.type){

    
    case RECEIVE_USER:
      const newUser = {[action.user.id]: action.user};
      return merge({},state,newUser);

    case RECEIVE_SESSION:
      const loggedUser = {[action.user.id]: action.user};
      return merge({},state,loggedUser);


    default:
      return state;
  }
}
