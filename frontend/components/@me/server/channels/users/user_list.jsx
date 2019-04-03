import React from 'react';

import { connect } from 'react-redux';
import { getUsers } from '../../../../../actions/user_actions';
import { createChannel } from '../../../../../actions/channel_actions';
const msp = (state, ownProps) =>{
  let channel = state.entities.channels[ownProps.cID];
  let users = [];

  if (channel && channel.users) {
    users = channel.users.map((id) => state.entities.users[id])
  }

  return{
    cID: ownProps.cID,
    channel: channel,
    users: users,
    cUser: state.session.currentUser
  }
}

const mdp = dispatch => ({
  fetchUsers: channelId => dispatch(getUsers(channelId)),
  createDM: channel => dispatch(createChannel(channel)),

});

class UserList extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      curruser_id: this.props.cUser,
      user_id: ""
    }
  }


  componentDidMount(){
    this.props.fetchUsers(this.props.cID)
  }
  componentDidUpdate(prevProps) {
    if (prevProps.cID !== this.props.cID){
      this.props.fetchUsers(this.props.cID)
    }
  }
  createDM(){
    //add "message" to state"
    // In channel controller, if the DM is made, create a new message on that Channel
    //
    e.preventDefault();
    this.props.createDM(this.state)
  }



  render(){
    let users = "";
    if (this.props.users.length > 0) {
      users = this.props.users.map((user) => {
        return (
          <li key={user.id} className="user-list-item">
            <img src={window.userIcon} />
            <h1>{user.username}</h1>
          </li>
        )
      })
    }
    return (<ul>
      {users}
    </ul>)

  }



}

export default connect(msp, mdp)(UserList);