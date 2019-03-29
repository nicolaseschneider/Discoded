import React from 'react';
 
class HomePage extends React.Component {
  constructor(props){
    super(props);
  }
  componentDidMount(){
    this.props.getUser(this.props.userId);
    this.props.getServers();
  }




  render (){
    return (

      <div className="homepage-wrapper">
        <h1> WELCOME {this.props.user.username} </h1>
        <button onClick={this.props.logout}>LOGOUT</button>

      </div>
    
    );
  }
}

export default HomePage;