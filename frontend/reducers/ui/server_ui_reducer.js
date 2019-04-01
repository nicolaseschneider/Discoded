import { SELECT_SERVER } from '../../actions/server_actions';

const _nullselected ={
  id: null
}
export default (state = _nullselected, action) => {
  Object.freeze(state);
  switch(action.type){
    case SELECT_SERVER:
      return { id: action.id };
    default:
      return state;
  }
}