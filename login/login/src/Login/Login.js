import React, { Component } from 'react';
import { Button, Form, FormGroup, Input } from 'reactstrap';
import './Login.css';
import Axios from 'axios';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    };
  }

  handleInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleLoginSubmit = e => {
    const myObj = { username: this.state.username, password: this.state.password }
    Axios
      .post('http://localhost:9000/api/login', myObj, { withCredentials: true })
      .then(res => {
        localStorage.setItem('user', 'logged in')
        console.log(res)
        window.location.reload();
      })
      .catch(err => {
        console.log(err)
      })
      this.setState({ username: '', password: '' })
  };


  render() {
    return (
      <Form className="login-form">
      <div className='loginContainer'>
        <div>Please Login</div>
        <FormGroup>
          <Input
            type="text"
            placeholder="User Name"
            name="username"
            value={this.state.username}
            onChange={this.handleInputChange}
          />
        </FormGroup>
        <FormGroup>
          <Input
            type="password"
            placeholder="Password"
            name="password"
            value={this.state.password}
            onChange={this.handleInputChange}
          />
          <br />
          <Button color="success" size="large" onClick={this.handleLoginSubmit}>
            Log In
          </Button>
        </FormGroup>
        </div>
      </Form>
    );
  }
}

export default Login;
