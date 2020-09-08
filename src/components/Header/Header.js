import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { logoutUser, getUser } from '../../redux/reducer';
import axios from 'axios';

class Header extends React.Component {
  componentDidMount() {
    this.props.getUser();
  }

  logout = () => {
    axios
      .get('/auth/logout')
      .then((res) => {
        this.props.logoutUser();
        this.props.history.push('/');
      })
      .catch((err) => console.log(err));
  };

  render() {
    return (
      <header>
        <div className="logo-container">
          <h1>Cloudy</h1>
        </div>
        <nav className="navigation">
          <ul>
            <li>
              <Link to="/homepage">Home</Link>
            </li>
            <li>
              <Link to="/profile">Profile</Link>
            </li>
            <li onClick={this.logout}>
              <Link to="/">Logout</Link>
            </li>
          </ul>
        </nav>
      </header>
    );
  }
}

const mapStateToProps = (state) => state;

export default connect(mapStateToProps, { logoutUser, getUser })(Header);
