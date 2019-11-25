import React, { Component } from 'react';

import './App.css';
import Chat from './containers/Chat';
import Auth from './containers/Auth';
import styled from 'styled-components';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

const Main = styled.div`
  width: 100%;
  heigth: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentUser: ''
    };
  }

  getUser = () => {
    const currentUser = localStorage.getItem('currentUser');

    if (currentUser) {
      this.setState({
        currentUser
      });
    }
  };

  setCurrentUser = currentUser => {
    if (currentUser) {
      localStorage.setItem('currentUser', currentUser);

      this.setState({
        currentUser
      });
    }
  };

  onLogout = () => {
    localStorage.removeItem('currentUser');

    this.setState({
      currentUser: ''
    });
  };

  componentDidMount() {
    this.getUser();
  }

  render() {
    const { currentUser } = this.state;

    return (
      <BrowserRouter>
        <Main>
          <Switch>
            <Route
              exact
              path="/"
              render={() => <Chat currentUser={currentUser} onLogout={this.onLogout}/>}
            ></Route>
            <Route
              path="/auth"
              render={() => (
                <Auth
                  currentUser={currentUser}
                  setCurrentUser={this.setCurrentUser}
                />
              )}
            ></Route>
          </Switch>
        </Main>
      </BrowserRouter>
    );
  }
}

export default App;
