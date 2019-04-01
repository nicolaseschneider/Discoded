import { connect } from 'react-redux';
import { selectServer } from '../../../../actions/server_actions';
import ChannelIndex from './channel_index';



const msp = (state, ownProps) => {
    if (ownProps.match.params.serverId){
        return { sID: ownProps.match.params.serverId,
                 uID: state.session.currentUser }
    } else {
        return { uID: state.session.currentUser}
    }


};
const mdp = dispatch => ({
    selectServer: (id) => dispatch(selectServer(id)),

});

export default connect(msp,mdp)(ChannelIndex);
