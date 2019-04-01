import { connect } from 'redux';

import ServerDetail from './selected_server';

const msp = (state, ownProps) => {
    let serverId;
    if (ownProps.match.params.serverId){
        serverId = ownProps.match.params.serverId;
    } else{
        serverId = null;
    }
}



export default connect(msp, mdp)(ServerDetail)