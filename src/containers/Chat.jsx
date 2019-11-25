import React, { Component } from 'react';
import styled from 'styled-components';
import { WebsocketMockAdapter } from '../core/emmiter';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

import UsersList from '../components/UsersList';
import MessageBlock from './MessageBlock';
import TextFieldBlock from './TextFieldBlock';
import Profile from '../components/Profile';

const ChatStyled = styled.div`
  background-color: white;
  width: 40%;
  height: 80vh;
  margin-top: 2.5em;
  min-width: 900px;
  box-shadow: rgba(15, 15, 15, 0.05) 0px 0px 0px 1px,
    rgba(15, 15, 15, 0.1) 0px 3px 6px, rgba(15, 15, 15, 0.2) 0px 9px 24px;
  border-radius: 4px;
  display: flex;
  position: relative;
`;

const defaultUserAvatar =
  'https://www.bluebridgewindowcleaning.co.uk/wp-content/uploads/2016/04/default-avatar.png';

class Chat extends Component {
  constructor(props) {
    super(props);

    this.state = {
      users: [],
      messages: [],
      timerId: 0
    };

    this.messageBlockRef = '';
  }

  getMessage = message => {
    const userIndex = this.state.users.findIndex(
      ({ id }) => id === message.user_id
    );

    const user = this.state.users[userIndex];
    const userName = `${user.name} ${user.secname}`;
    const avatar = user.avatar;
    let messages = [...this.state.messages];

    messages.push({ ...message, userName, avatar });

    this.setState({ messages });
  };

  onSubmit = message => {
    if (!message) {
      return;
    }

    let messageObj = {
      text: message,
      userName: this.props.currentUser,
      avatar: defaultUserAvatar,
      isSelfMessage: true
    };
    let messages = [...this.state.messages];

    messages.push(messageObj);

    this.setState(
      {
        messages
      },
      () => {
        const messageBlockRef = this.messageBlockRef;

        if (
          messageBlockRef instanceof Element ||
          messageBlockRef instanceof HTMLDocument
        ) {
          messageBlockRef.scrollTop = messageBlockRef.scrollHeight;
        }
      }
    );
  };

  componentDidMount() {
    const intervalTime = 3000;
    const initMock = new WebsocketMockAdapter(null, 0);
    const users = initMock.getUsers();

    this.setState(
      {
        users
      },
      () => {
        const mock = new WebsocketMockAdapter(this.getMessage, intervalTime);
        this.setState({
          timerId: mock.timerId
        });
      }
    );
  }

  componentWillUnmount() {
    const mock = new WebsocketMockAdapter();

    mock.removeSubscribe(this.state.timerId);
  }

  getMessageBlockRef = ref => {
    this.messageBlockRef = ref;
  };

  render() {
    const { users, messages } = this.state;
    const { currentUser, onLogout } = this.props;

    if (currentUser) {
      return (
        <ChatStyled>
          <UsersList
            users={users}
            currentUserProfile={
              <Profile
                userName={currentUser}
                avatar={defaultUserAvatar}
                onLogout={onLogout}
              />
            }
          />
          <MessageBlock
            messages={messages}
            getMessageBlockRef={this.getMessageBlockRef}
          />
          <TextFieldBlock onSubmit={this.onSubmit} />
        </ChatStyled>
      );
    }

    return <Redirect to={'/auth'} />;
  }
}

Chat.propTypes = {
  currentUser: PropTypes.string,
  onLogout: PropTypes.func
};

export default Chat;
