import React from 'react';
import ServerIndexContainer from './server/server_index_container';
import ChannelIndexContainer from './server/channels/channel_index_container';
import {Route, Switch} from 'react-router-dom';
import ChannelDetailContainer from './server/channels/channel_detail_container';
import test from '../test';
import DMIndexContainer from './DM_index_container';
import DMDetailContainer from './DM_detail_container';
import LoggedInSplash from './loggedin_splash';
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
          <Switch>
            <Route path="/@me/:userId/DMs" component={DMIndexContainer} />
            <Route path="/@me/:userId/:serverId" component={ChannelIndexContainer} />
          </Switch> 
        </aside>

        <aside className="channel-detail">
          <Switch>
            <Route exact path="/@me/:userId/DMs" component={LoggedInSplash} />
            <Route path="/@me/:userId/DMs/:channelId" component={DMDetailContainer} />
            <Route path="/@me/:userId/:serverId/:channelId" component={ChannelDetailContainer} />
          </Switch>
        </aside>

      </div>
    
    );
  }
}

export default HomePage;