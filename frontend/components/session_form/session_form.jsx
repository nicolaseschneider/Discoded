import React from 'react';
import {Link} from 'react-router-dom';



class SessionForm extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      username: "",
      password: "",
      email: "",
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
    const {username, email, password } = this.state
    this.props.submitAction({ username, email, password });
  }

  render () {
    let passEmpt = 'Password';
    let userEmpt = 'Username';
    let emailEmpt = 'Email'
    const parsedErrors = () => {
      this.props.errors.forEach(element => {
        if (element.split(" ")[0] === 'Username'){
          userEmpt = "Username - " + element; 
        }
        if (element.split(" ")[0] === 'Password'){
          passEmpt = "Password - " + element;
        }
       
      });

    };
  
    const otherFormLink = this.signingUpBool() ? 
      <Link to="/login">Already have an account?</Link> :
      <span>
        need an account? <Link to="/signup">Register</Link>
      </span>;
    const header = this.signingUpBool() ? 
      <h1>Create an account</h1> :
      (
        <span>
          <h1>Welcome back!</h1>
          <p>We're so excited to see you again!</p>
        </span>
      );
    const emailField = this.signingUpBool() ? 
      (<label> {emailEmpt}
        <input className='session-input' type="text" value={this.state.email} onChange={this.handleInput('email')} />
      </label>) : "";
    
    return (

      <div className='session-div'>
        <div className='form-wrap'>

        <form className="session-form" onSubmit={this.handleSubmit} >
        
          <strong className='session-header'>
            {header}
          </strong>
          <label> {userEmpt}
            <input className='session-input' type="text" value={this.state.username} onChange={this.handleInput('username')} />
          </label>
          {emailField}
          <label> {passEmpt}
            <input className='session-input' type="password" value={this.state.password} onChange={this.handleInput('password')} />
          </label>
          <input className='session-submit' type="submit" value={this.props.formType} />
          {otherFormLink}
        </form>
      </div>
    </div>
    )
  }
}



export default SessionForm;