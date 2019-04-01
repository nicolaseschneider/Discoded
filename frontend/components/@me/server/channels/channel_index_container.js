import { connect } from 'react-redux';
import { selectServer } from '../../../../actions/server_actions';
import ChannelIndex from './channel_index';
import { getChannel, getChannels } from '../../../../actions/channel_actions'; 



const msp = (state, ownProps) => ({ 

    sID: ownProps.match.params.serverId,
    server: state.entities.servers[ownProps.match.params.serverId],
    channels: Object.values(state.entities.channels)

});

const mdp = dispatch => ({
    selectServer: (id) => dispatch(selectServer(id)),
    receiveChannels: (sId) => dispatch(getChannels(sId)),
    receiveChannel: (id) => dispatch(getChannel(id))
});

export default connect(msp,mdp)(ChannelIndex);
