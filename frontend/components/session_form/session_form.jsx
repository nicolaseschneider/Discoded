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
    this.handleDemoSubmit = this.handleDemoSubmit.bind(this);
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
  handleDemoSubmit(e){
    e.preventDefault();
    this.props.demoLogin({ username: 'Karateman', password: 'Glubgluby', email: 'nicolas.e.schneider@vanderbilt.edu'});
  }
  handleSubmit(e){
    e.preventDefault();
    this.props.submitAction(this.state);
  }

  render () {
    let passEmpt = 'Password';
    let userEmpt = 'Username';
    let emailEmpt = 'Email'
    const parseErrors = (errors) => {
      for (let i = 0; i < errors.length; i++){

        if (errors[i].split(" ")[0] === 'Username'){
          userEmpt = "Username - " + errors[i]; 
        }
        if (errors[i].split(" ")[0] === 'Password'){
          passEmpt = "Password - " + errors[i];
        }
        if (errors[i].split(" ")[0] === 'Email'){
          emailEmpt = "Email - " + errors[i];
        }
        if (errors[i].split(" ")[0] === 'Invalid'){
          userEmpt = "Username - " + errors[i];
          passEmpt = "Password - " + errors[i];
          return;
        }
    }
  };
    if (this.props.errors.responseJSON){
      parseErrors(this.props.errors.responseJSON);
    }

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
    (<label className={ emailEmpt.length === 5 ? ("") : ("bad-label")} > {emailEmpt}
      <input 
      className={emailEmpt.length === 5 ? ("session-input") : ("session-input bad-input")} 
      type="text" 
      value={this.state.email} 
      onChange={this.handleInput('email')} 
      />
    </label>) : "";
  
    return (

      <div className='session-div'>
        <div className='form-wrap'>

        <form className="session-form" onSubmit={this.handleSubmit} >
        
          <strong className='session-header'>
            {header}
          </strong>
          <label className={userEmpt.length === 8 ? ("") : ("bad-label")}> {userEmpt}
              <input 
                className={userEmpt.length === 8 ? ("session-input") : ("session-input bad-input")}
                type="text" 
                value={this.state.username} 
                onChange={this.handleInput('username')} 
              />
          </label>
          {emailField}
          <label className={passEmpt.length === 8 ? ("") : ("bad-label")}> {passEmpt}
              <input className={passEmpt.length === 8 ? ("session-input") : ("session-input bad-input")} 
                type="password" 
                value={this.state.password} 
                onChange={this.handleInput('password')} 
              />
          </label>
          <input className='session-submit' type="submit" value={this.props.formType} />
            <button className='session-submit'onClick={this.handleDemoSubmit}>Login Demo User</button>
          {otherFormLink}
        </form>
      </div>
    </div>
    )
  }
}



export default SessionForm;