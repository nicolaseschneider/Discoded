
import {connect} from 'react-redux';
import {selectChannel, getChannel} from '../../../../actions/channel_actions';
import ChannelDetail from './channel_detail';

const msp = (state, ownProps) => ({
  cID: ownProps.match.params.channelId,
  uID: ownProps.match.params.userId,
  user: state.entities.users[state.session.currentUser],
  channel: state.entities.channels[ownProps.match.params.channelId]
});

const mdp = dispatch => ({
  selectChannel: id => dispatch(selectChannel(id)),
  fetchChannel: id => dispatch(getChannel(id))
});


export default connect(msp, mdp)(ChannelDetail);