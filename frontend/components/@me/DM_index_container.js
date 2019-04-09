import { connect } from 'react-redux';
import { getChannels, clearChannels } from '../../actions/channel_actions';
import DMIndex from './DM_Index';
import {getUser} from '../../actions/user_actions';





const msp = (state, ownProps) => ({
  uID: ownProps.match.params.userId,
  channels: Object.values(state.entities.channels),
  user: state.entities.users[ownProps.match.params.userId],

});

const mdp = dispatch => ({
  getDMs: ()=> dispatch(getChannels("DM")),
  getUser: (id) => dispatch(getUser(id)),
  clear: () => dispatch(clearChannels())
});

export default connect(msp, mdp)(DMIndex);
