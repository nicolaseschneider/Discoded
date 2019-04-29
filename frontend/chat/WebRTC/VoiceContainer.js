import { connect } from 'react-redux';
import VoiceChannel from './voice_channel';
import { withRouter } from 'react-router-dom';


const msp = (state) =>  {
    const channelId = ownProps.match.params.voiceId;
    return {
        channelId,
        currentUser: state.session.currentUser,
        cID: ownProps.match.params.channelId,
        uID: ownProps.match.params.userId,
        user: state.entities.users[state.session.currentUser],
        channel: state.entities.channels[channelId],
    }

}
export default withRouter(connect(msp, mdp)(VoiceChannel));