import React from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { loginUser } from '../../redux/reducer';
import './Login.css';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      username: '',
      password: '',
      newUser: false,
    };
  }

  toggle = () => {
    this.setState({
      newUser: !this.state.newUser,
    });
  };

  changeHandler = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  login = (e) => {
    e.preventDefault();
    const { username, password } = this.state;
    axios
      .post('/auth/login', { username, password })
      .then((res) => {
        this.props.loginUser(res.data);
        this.props.history.push('/homepage');
      })
      .catch((err) => {
        console.log(err);
        alert('Login Failed');
      });
  };

  register = () => {
    const { username, password } = this.state;
    axios
      .post('/auth/register', { username, password })
      .then((res) => {
        this.props.loginUser(res.data);
        this.props.history('/homepage');
      })
      .catch((err) => {
        console.log(err);
        alert('Registration Failed');
      });
  };

  render() {
    const { username, password } = this.state;
    return (
      <div>
        {/* <div className="title">
          <h1>Cloudy</h1>
        </div> */}
        <div className="login">
          <div className="login-container">
            <div className="login-title">
              <h1>Head in The Clouds</h1>
            </div>

            <img
              src={require('./head.png')}
              alt="Person with head in clouds"
              width="500"
              height="200"
            />

            {!this.state.newUser ? (
              <div>
                <div className="input-cont">
                  <input
                    onChange={(e) => this.changeHandler(e)}
                    name="username"
                    type="text"
                    value={username}
                    placeholder="Username"
                  />
                  <input
                    onChange={(e) => this.changeHandler(e)}
                    name="password"
                    type="password"
                    value={password}
                    placeholder="Password"
                  />
                </div>
                <div className="btn-container">
                  <button className="log-button" onClick={this.login}>
                    Login
                  </button>
                  <button className="log-button" onClick={this.toggle}>
                    Sign Up
                  </button>
                </div>
              </div>
            ) : (
              <div>
                <input
                  onChange={(e) => this.changeHandler(e)}
                  name="username"
                  type="text"
                  value={username}
                  placeholder="Username"
                />
                <input
                  onChange={(e) => this.changeHandler(e)}
                  name="password"
                  type="password"
                  value={password}
                  placeholder="Password"
                />
                <div classname="btn-container">
                  <button className="log-button" onClick={this.register}>
                    Register
                  </button>
                  <button className="log-button" onClick={this.toggle}>
                    Registered
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => state;

export default connect(mapStateToProps, { loginUser })(Login);
