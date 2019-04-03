import React from 'react';

import { connect } from 'react-redux';
import { getUsers } from '../../../../../actions/user_actions';

const msp = (state, ownProps) =>{
  let channel = state.entities.channels[ownProps.cID];
  let users = [];
  if (channel && channel.users) {
    users = channel.users.map((id) => state.entities.users[id])
  }

  return{
    cID: ownProps.cID,
    channel: channel,
    users: users
  }
}
const mdp = dispatch => ({
  fetchUsers: channelId => dispatch(getUsers(channelId))
})

class UserList extends React.Component{


  componentDidMount(){
    this.props.fetchUsers(this.props.cID)
  }
  componentDidUpdate(prevProps) {
    if (prevProps.cID !== this.props.cID){
      this.props.fetchUsers(this.props.cID)
    }
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