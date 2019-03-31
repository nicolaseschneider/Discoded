
import React from 'react';
import ServerIndexItem from './server_index_item';
import DefaultModal from './default_modal';
import CreateServer from './create_server';
import JoinServer from './join_modal';
class ServerIndex extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      modal: false
    };
    this.modalON = this.modalON.bind(this);
    this.modalOFF = this.modalOFF.bind(this);
  }
  componentDidMount(){
    this.props.getServers();
  }
  modalON(){ 
    this.setState({ modal: true }, () => this.props.openDefModal()); 
  }
  modalOFF(e){ 
    e.stopPropagation();
    this.props.closeModal();
    this.setState({modal: false}); 
  }

  render() {
    let modal;
    console.log(this.props.modal);
    switch(this.props.modal){
      case 'default server':

        modal = <div onClick={this.modalOFF} className="modal-screen">
          <div className="form-container">
            <DefaultModal openJoinModal={this.props.openJoinModal} 
            openCreateServerModal={this.props.openCreateServerModal} />
          </div>
        </div>
        break

      case 'create server':

        modal = <div onClick={this.modalOFF} className="modal-screen">
          <strong  className="form-container">
            <CreateServer openDefModal={this.props.openDefModal} closeModal={this.props.closeModal} 
            createServer={this.props.createServer} />
          </strong>
        </div>
        break

      case 'join server':

        modal = <div onClick={this.modalOFF} className="modal-screen">
          <strong className="form-container">
            <JoinServer openDefModal={this.props.openDefModal} closeModal={this.props.closeModal}
            joinServer={this.props.joinServer} />
          </strong>
        </div>
        break

      default:
        modal = ""
        break
    }
    const indexList = this.props.servers.map(server => <ServerIndexItem key={server.invite_code} server={server} />)
    return (
      <div>
        {modal}
        <ul>
          <li>
            <img className="server-bar-logo" src={window.logoURL}></img>
          </li>
          
          <div className="server-divide"></div>
          {indexList}
          <li onClick={this.modalON} className="add-server">
            +
          </li>
          <li onClick={this.props.logout} className="add-server">
            <i className="fas fa-sign-out-alt"></i>
          </li>

        </ul>
      </div>
    )
  }
  //add a create server form
  //on index item add a button that renders invite code
}

export default ServerIndex;