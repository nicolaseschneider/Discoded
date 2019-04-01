import React from 'react';
import ServerIndexContainer from './server/server_index_container';
import ChannelIndexContainer from '../@me/server/channels/channel_index_container';
import {Route} from 'react-router-dom';
 
class HomePage extends React.Component {
  constructor(props){
    super(props);
  }

  componentDidMount(){
    this.props.getUser(this.props.userId);
  }




  render (){
    return (

      <div className="homepage-wrapper">
        <aside className="server-bar">
          <ServerIndexContainer />
        </aside>

        <aside className="server-detail">
          <Route path="/@me/:userId/:serverId" component={ChannelIndexContainer} />
        </aside>
        

        <h1> WELCOME {this.props.user.username} </h1>

      </div>
    
    );
  }
}

export default HomePage;