import { connect } from 'react-redux';
import { selectServer, getServer } from '../../../../actions/server_actions';
import ChannelIndex from './channel_index';
import {getChannel, getChannels } from '../../../../actions/channel_actions'; 
import {openInviteModal, openCreateChannelModal} from '../../../../actions/ui_actions';
import {getUser} from '../../../../actions/user_actions'




const msp = (state, ownProps) => ({ 
    uID: state.session.currentUser,
    sID: ownProps.match.params.serverId,
    server: state.entities.servers[ownProps.match.params.serverId],
    channels: Object.values(state.entities.channels),
    user: state.entities.users[ownProps.match.params.userId],

});

const mdp = dispatch => ({
    selectServer: (id) => dispatch(selectServer(id)),
    receiveChannels: (sId) => dispatch(getChannels(sId)),
    receiveChannel: (id) => dispatch(getChannel(id)),
    getServer: (id) => dispatch(getServer(id)),
    openInviteModal: () => dispatch(openInviteModal),
    getUser: (id) => dispatch(getUser(id)),
    openNewChannelModal: () => dispatch(openCreateChannelModal)
});

export default connect(msp,mdp)(ChannelIndex);
