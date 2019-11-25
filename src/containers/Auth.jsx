import React, { Component } from 'react';
import styled from 'styled-components';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

import Input from '../components/Input';
import Button from '../components/Button';
import Error from '../components/Error';

const StyledLink = styled.a`
  display: inline-block;
  color: #3a8bbb;
  text-decoration: none;
  cursor: pointer;

  &:hover {
    color: #1e6189;
  }
`;

const StyledRedirectLabel = styled.div`
  margin-top: 2.5em;
`;

const StyledForm = styled.form`
  width: 40%;
  max-width: 500px;
  margin-top: 3.5em;
  background-color: white;
  box-shadow: rgba(15, 15, 15, 0.05) 0px 0px 0px 1px,
    rgba(15, 15, 15, 0.1) 0px 3px 6px, rgba(15, 15, 15, 0.2) 0px 9px 24px;
  border-radius: 4px;
  padding-top: 2.5em;
  padding-bottom: 1em;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #444;
`;

const StyledFormTitle = styled.h2`
  font-size: 1.7rem;
  font-weight: 700;
  margin-bottom: 1.2em;
`;

class Auth extends Component {
  constructor(props) {
    super(props);

    this.state = {
      form: 'signin',
      userName: '',
      password: '',
      error: ''
    };
  }

  addUser = (userName, password) => {
    const usersList = JSON.parse(localStorage.getItem('usersList')) || [];
    const currentUser = {
      userName,
      password
    };

    usersList.push(currentUser);
    localStorage.setItem('usersList', JSON.stringify(usersList));
  };

  onChange = e => {
    const target = e.target;

    this.setState({
      [target.name]: target.value
    });
  };

  checkUser = (userName, password) => {
    const usersList = JSON.parse(localStorage.getItem('usersList')) || [];
    const currentUserIndex = usersList.findIndex(
      user => user.userName === userName
    );

    if (usersList.length === 0 || currentUserIndex === -1) {
      this.setState({
        error: `User with ${userName} user name is not defined`
      });

      return null;
    }

    if (usersList[currentUserIndex].password !== password) {
      this.setState({
        error: `Invalid password`
      });

      return null;
    }

    return true;
  };

  signIn = e => {
    const { userName, password } = this.state;
    const { setCurrentUser } = this.props;

    e.preventDefault();
    if (this.checkUser(userName, password)) {
      setCurrentUser(userName);
    }
  };

  signUp = e => {
    const { userName, password } = this.state;
    const { setCurrentUser } = this.props;

    e.preventDefault();
    this.addUser(userName, password);
    setCurrentUser(userName);
  };

  toSignIn = () => {
    this.setState({
      form: 'signin'
    });
  };

  toSignUp = () => {
    this.setState({
      form: 'signup'
    });
  };

  render() {
    if (this.props.currentUser) {
      return <Redirect to="/" />;
    }

    const { error, userName, password, form } = this.state;
    const signin = form === 'signin' ? true : false;
    const title = signin ? 'Sign in to Chat' : 'Sign up to Chat';
    const buttonTitle = signin ? 'Sign in' : 'Sign up';
    const buttonOnClick = signin ? this.signIn : this.signUp;
    const redirectLabelTitle = signin ? 'Not a member? ' : 'Already a member? ';
    const redirectLinkOnClick = signin ? this.toSignUp : this.toSignIn;
    const redirectLinktitle = signin ? 'Sign up now' : 'Sign In';

    return (
      <StyledForm>
        <Error error={error} />
        <StyledFormTitle>{title}</StyledFormTitle>
        <Input
          type="text"
          name="userName"
          placeholder="Login"
          value={userName}
          onChange={this.onChange}
        />
        <Input
          type="password"
          name="password"
          placeholder="Password"
          value={password}
          onChange={this.onChange}
        />
        <Button title={buttonTitle} onClick={buttonOnClick} />
        <StyledRedirectLabel>
          {redirectLabelTitle}
          <StyledLink href="#" onClick={redirectLinkOnClick}>
            {redirectLinktitle}
          </StyledLink>
        </StyledRedirectLabel>
      </StyledForm>
    );
  }
}

Auth.propTypes = {
  setCurrentUser: PropTypes.func
};

export default Auth;
