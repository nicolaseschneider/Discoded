import React from 'react';


class SessionForm extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      username: "",
      password: ""
    };
    const handleSubmit = this.handleSubmit.bind(this);
  }

  handleInput(field){
    return (e) => { 
      this.setState({ [type]: e.target.value }); 
    };
  }

  handleSubmit(e){
    e.preventDefault();
    this.props.submitAction(this.state).then( () => this.props.history.push('/'));
  }

  render () {
    <div>
      <ul>
        {this.props.errors}
      </ul>
      <form className='session-form' onSubmit={handleSubmit}>
        <label> Username:
          <input type="text" value={this.state.username} onChange={this.handleInput('username')} />
        </label>

        <label>Password:
          <input type="password" value={this.state.password} onChange={this.handleInput('password')} />
        </label>

        <input type="submit" value="this.props.formType" />
      </form>
    </div>
  }

}

export default SessionForm