import React from 'react';
import {Link} from 'react-router-dom';



class SessionForm extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      username: "",
      password: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInput(field){
    return (e) => { 
      return this.setState({ [field]: e.target.value }); 
    };
  }
  signingUpBool(){
    if(this.props.formType === 'Sign Up'){
      return true;
    }else{
      return false;
    }
  }

  handleSubmit(e){
    e.preventDefault();
    this.props.submitAction(this.state);
  }

  render () {

    const otherFormLink = this.signingUpBool() ? 
      <Link to="/login">Already have an account?</Link> :
      <span>
        need an account? <Link to="/signup">Register</Link>
      </span>;


    return <div className='session-div'>
      <form className='session-form' onSubmit={this.handleSubmit}>
      
        <strong>
        </strong>
        <label> Username
          <input className='session-input' type="text" value={this.state.username} onChange={this.handleInput('username')} />
        </label>

        <label>Password
          <input className='session-input' type="password" value={this.state.password} onChange={this.handleInput('password')} />
        </label>
        <input className='session-submit' type="submit" value={this.props.formType} />
        {otherFormLink}
      </form>
    </div>
  }

}

export default SessionForm