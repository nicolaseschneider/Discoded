
import {connect} from 'react-redux';
import {selectChannel, getChannel} from '../../../../actions/channel_actions';
import ChannelDetail from './channel_detail';
import {getUsers} from '../../../../actions/user_actions';

const msp = (state, ownProps) =>{
  return {
    cID: ownProps.match.params.channelId,
    uID: ownProps.match.params.userId,
    user: state.entities.users[state.session.currentUser],
    channel: state.entities.channels[ownProps.match.params.channelId],
  }
};

const mdp = dispatch => ({
  selectChannel: id => dispatch(selectChannel(id)),
  fetchChannel: id => dispatch(getChannel(id)),
  fetchUsers: channelId => dispatch(getUsers(channelId))
});


export default connect(msp, mdp)(ChannelDetail);