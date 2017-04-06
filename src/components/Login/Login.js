import React, { Component } from 'react';

class LoginHome extends Component {
  constructor(props) {
    super()
    this.state = {
      user: "",
      password: "",
      validator: ""
    };
    this.validUser = this.validUser.bind(this);
    this.validPassword = this.validPassword.bind(this);
    this.validValidator = this.validValidator.bind(this);
    this.areYouCorrect = this.areYouCorrect.bind(this);
  }

  validUser(lit) {
    this.setState({user: lit.target.value})
  }

  validPassword(lit) {
    this.setState({password: lit.target.value})
  }

  validValidator(lit) {
    this.setState({validator: lit.target.value})
  }

  newRedirect() {
   window.location = '/go_home_roger';
   }

  areYouCorrect(lit) {
    lit.preventDefault();

    if(this.state.password === this.state.validator) {
      alert(`Logged in. Welcome ${this.state.user}...`);
      this.newRedirect();
    } else {
      alert("Failure Login...Make Sure password is the same!");
    };
  }

render() {
  return (
    <form onSubmit={this.areYouCorrect}>
      <h1>Sign Up</h1>
      <input type="text" value={this.state.user} placeholder="User Name" onChange={this.validUser}/>
      <input type="password" value={this.state.password} placeholder="Enter Password" onChange={this.validPassword} />
      <input type="password" value={this.state.validator} placeholder="Confirm Password" onChange={this.validValidator}/>
      <br/>
      <input id="enter" type="submit" value="Submit"/>
    </form>
      );
    }
  }



export default LoginHome;
