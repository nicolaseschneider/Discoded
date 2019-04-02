import React from 'react';
import ServerIndexContainer from './server/server_index_container';
import ChannelIndexContainer from './server/channels/channel_index_container';
import {Route} from 'react-router-dom';
import ChannelDetailContainer from './server/channels/channel_detail_container';
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

        <aside className="channel-detail">
          <Route path="/@me/:userId/:serverId/:channelId" component={ChannelDetailContainer} />
        </aside>

      </div>
    
    );
  }
}

export default HomePage;