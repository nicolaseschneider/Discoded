import React from 'react';


class JoinServerModal extends React.Component {
  constructor(props) {

    super(props);

    this.state = {
      code: '',
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.updateName = this.updateName.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    // this.props.createServer(this.state);
  }

  updateName(e) {
    e.preventDefault();
    this.setState({ name: e.target.value });
  }
  render() {
    <div className="join-server-wrapper">
      <header className="join-server-header">
        <h1> CREATE YOUR SERVER </h1>
        <h2>By creating a server, you will have access to free voice and text chat to use amongst your friends</h2>
      </header>
      <form onSubmit={this.handleSubmit}>
        <label>
          <input type="text" placeholder="Enter a server name" onChange={this.updateName} value={this.state.name} />
          Enter an instant invite
        </label>
        <button> BACK </button>
        <input type="submit" value="Join" />

      </form>
    </div>



  }

}
export default JoinServerModal;