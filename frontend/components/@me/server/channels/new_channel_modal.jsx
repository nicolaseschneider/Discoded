import React from 'react';
import { connect } from 'react-redux';
import { createChannel } from '../../../../actions/channel_actions';
import { closeModal } from '../../../../actions/ui_actions';

const msp = state => ({
  id: state.ui.server.id
})

const mdp = (dispatch) => ({
  createChannel: (channel) => dispatch(createChannel(channel)),
  closeModal: () => dispatch(closeModal)
})

class CreateServer extends React.Component {
  constructor(props) {

    super(props);

    this.state = {
      name: '',
      server_id: this.props.id
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.updateName = this.updateName.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.createChannel(this.state);
    this.props.closeModal();
  }

  updateName(e) {
    e.preventDefault();
    this.setState({ name: e.target.value, server_id: this.state.server_id });
  }
  render() {
    return (
      <div onClick={(e) => e.stopPropagation()} className="create-server-wrapper channel-create">
        <header className="create-server-header">
          <h1> CREATE TEXT CHANNEL </h1>
          <h2>in Text Channels</h2>
        </header>

        <form onSubmit={this.handleSubmit}>

          <div className="create-channel-holder">

            <h3>
              CHANNEL NAME
            </h3>

            <input type="text"  onChange={this.updateName} value={this.state.name} />

          </div>

          <div className="create-footer">
            <a onClick={this.props.closeModal}> Cancel </a>
            <input type="submit" value="Create Channel" />
          </div>

        </form>
      </div>)



  }

}
export default connect(msp, mdp)(CreateServer);