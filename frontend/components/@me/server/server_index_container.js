import { connect } from 'react-redux';
import { createServer, joinServer } from '../../../actions/server_actions';
import ServerIndex from './server_index';
import { openDefServerModal,closeModal, openJoinServerModal, openCreateServerModal } from '../../../actions/ui_actions';
import { getServers } from '../../../actions/server_actions';


const msp = state => ({
  servers: Object.values(state.entities.servers),
  modal: state.ui.modal

});

const mdp = dispatch => ({
  createServer: server => dispatch(createServer(server)),
  openDefModal: () => dispatch(openDefServerModal),
  closeModal: () => dispatch(closeModal),
  openJoinModal: () => dispatch(openJoinServerModal),
  openCreateServerModal: () => dispatch(openCreateServerModal),
  getServers: ()=> dispatch(getServers()),
  joinServer: (invite) => dispatch(joinServer(invite))
});

export default connect(msp, mdp)(ServerIndex);