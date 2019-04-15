import React from 'react';

import { connect } from 'react-redux';
import { getUsers } from '../../../../../actions/user_actions';
import { createChannel } from '../../../../../actions/channel_actions';
import { createDMForm } from '../../../../../actions/ui_actions';
import UserListItem from './user_list_item';
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
  openDMform: () => dispatch(createDMForm)
});

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
          <UserListItem key ={user ? user.id : ""} user={user} />
        )
      })
    }
    return (<ul className="user-list">
      {users}
    </ul>)

  }



}

export default connect(msp, mdp)(UserList);