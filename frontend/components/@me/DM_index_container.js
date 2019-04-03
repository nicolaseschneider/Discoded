import { connect } from 'react-redux';
import { getChannels } from '../../actions/channel_actions';
import DMIndex from './DM_Index';





const msp = (state, ownProps) => ({
  uID: state.session.currentUser,
  channels: Object.values(state.entities.channels),
  user: state.entities.users[ownProps.match.params.userId],

});

const mdp = dispatch => ({
  getDMs: ()=> dispatch(getChannels("DM"))

});

export default connect(msp, mdp)(DMIndex);
