import { SELECT_CHANNEL } from '../../actions/channel_actions';

const _nullselected = {
  id: null
};
export default (state = _nullselected, action) => {
  Object.freeze(state);
  switch (action.type) {
    case SELECT_CHANNEL:
      return { id: action.id };
    default:
      return state;
  }
}