import React from 'react';


class CreateServer extends React.Component {
  constructor(props){

    super(props);

    this.state = {
      name: '',
      image: '',
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.updateName = this.updateName.bind(this);
  }

  handleSubmit(e){
    e.preventDefault();
    this.props.createServer(this.state);
  }

  updateName(e) {
    e.preventDefault();
    this.setState({name: e.target.value});
  }
  render(){
    return (
      <div onClick={(e) => e.stopPropagation()} className="create-server-wrapper"> 
      <header className="create-server-header">
        <h1> CREATE YOUR SERVER </h1>
        <h2>By creating a server, you will have access to free voice and text chat to use amongst your friends</h2>
      </header>
      <form onSubmit={this.handleSubmit}>
        <div className="create-holder">

          <div className="create-name">
            <h3>
              SERVER NAME
            </h3>
            <input type="text" placeholder="Enter a server name" onChange={this.updateName} value={this.state.name} />
          </div>

          <div className="create-avatar">
            <div className="server-avatar"></div>
          
          </div>
        </div>
        <div className="create-footer"> 
          <a onClick={this.props.openDefModal}> BACK </a>
          <input type="submit" value="Create" />
        </div>

      </form>
    </div>)



  }

}
export default CreateServer;