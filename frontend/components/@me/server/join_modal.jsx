import React from 'react';


class JoinServerModal extends React.Component {
  constructor(props) {

    super(props);

    this.state = {
      code: '',
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.updateCode = this.updateCode.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.joinServer(this.state.code);
  }

  updateCode(e) {
    e.preventDefault();
    this.setState({ code: e.target.value });
  }
  render() {
    return (
        <div onClick={(e) => e.stopPropagation()} className="join-server-wrapper">
        <header className="join-server-header">
          <h1> JOIN A SERVER </h1>
          <h2>Enter your instant invite code below to join an existing server.</h2>
        </header>

        <form onSubmit={this.handleSubmit}>
          <label>
            <input type="text" onChange={this.updateCode} value={this.state.code} />
            Enter an invite code
          </label>
          <div className="join-footer">
            <a onClick={this.props.openDefModal}> BACK </a>
            <input type="submit" value="Join" />
          </div>

        </form>
      </div>
    )



  }

}
export default JoinServerModal;