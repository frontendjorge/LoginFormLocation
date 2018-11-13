import React, { Component } from 'react';
import { Form, FormGroup, FormControl, Button } from 'react-bootstrap';
import Cookies from 'js-cookie';


const divStyle = {
  display: 'flex',
  alignItems: 'center',
  marginTop: -100
};

const buttonStyle = {
  marginBottom: 0
};

class LoginForm extends Component {
  constructor(props){
    super(props);
    this.state = {
      email:'',
      password:''
    }
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.emailChange = this.emailChange.bind(this);
    this.passwordChange = this.passwordChange.bind(this);
  }

  emailChange(e){
    this.setState({email:e.target.value});
  }

  passwordChange(e){
    this.setState({password:e.target.value});
  }
  handleFormSubmit(e) {
    e.preventDefault();
      if (this.state.email === "jorgsuau@live.com.co" && this.state.password === "123456"){
          console.log("Logged in Successfully!");
          document.cookie = "session=true";
          window.location.replace("/new");
    } else{
          alert("Datos incorrectos");
          Cookies.remove('session');
    }

  }

  render() {
    return (
        <div style={divStyle}>
          <Form horizontal className="LoginForm" id="loginForm">
            <FormGroup controlId="formEmail">
              <FormControl value={this.state.email} onChange={this.emailChange} type="email" placeholder="Email Address" />
            </FormGroup>
            <FormGroup controlId="formPassword">
              <FormControl value={this.state.password} onChange={this.passwordChange} type="password" placeholder="Password" />
            </FormGroup>
            <FormGroup style={buttonStyle} controlId="formSubmit">
              <Button bsStyle="primary" type="submit" onClick={this.handleFormSubmit}>
                Login
              </Button>
                </FormGroup>

                <p className="text-center">Please use username jorgsuau@live.com.co and password 123456<br />This it's just for testing proposals<br />By Jorge Suarez for Liftit frontend test.</p>
          </Form>
      </div>
    )
  }
}

export default LoginForm;
