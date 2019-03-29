import { getServers , getServer } from '../../actions/server_actions';
import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import homePage from './home_page';


const msp = state => ({
  servers: Object.values(state.entities.servers),
});

const mdp = dispatch => ({
  getServers: () => dispatch(getServers()),
  getServer: (id) => dispatch(getServer(id)),
  logout: () => dispatch(logout())
});

export default connect(msp, mdp)(homePage);