import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledMessageBlock = styled.div`
  background-color: rgb(243, 242, 245);
  width: 70%;
  overflow: auto;
  margin-bottom: 5em;
  box-sizing: border-box;
`;
const StyledMessageList = styled.ul`
  padding: 0.25em 1.6em;
  list-style-type: none;
  display: flex;
  flex-direction: column;
  align-items: end;
`;
const StyledMessage = styled.li`
  display: flex;
  min-width: 10em;
  max-width: 80%;
  background-color: ${props => (props.isSelfMessage ? '#a1c4fd' : 'white')};
  padding: 0.25em 1em;
  margin: 0.25em 0;
  border-radius: 0.4em;
  align-self: ${props => (props.isSelfMessage ? 'flex-end' : '')};
  white-space: pre;
`;

const StyledUserName = styled.div`
  margin-bottom: 0.3em;
  font-weight: 600;
`;

const StyledText = styled.div`
  display: inline-block;
`;

const StyledAvatar = styled.img`
  display: block;
  width: 2.5em;
  height: 2.5em;
  margin-right: 0.7em;
  border-radius: 50%;
`;

class MessageBlock extends Component {
  constructor(props) {
    super(props);

    this.messageBlockRef = React.createRef();
  }

  getSnapshotBeforeUpdate() {
    const elem = this.messageBlockRef.current;

    return (elem.scrollTop - elem.scrollHeight) * -1 === elem.clientHeight;
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    const elem = this.messageBlockRef.current;
    const { getMessageBlockRef } = this.props;

    getMessageBlockRef(elem);

    if (snapshot) {
      elem.scrollTop = elem.scrollHeight;
    }
  }

  render() {
    const { messages } = this.props;

    return (
      <StyledMessageBlock ref={this.messageBlockRef}>
        <StyledMessageList>
          {messages.map(
            ({ userName, text, avatar, id, isSelfMessage }, index) => (
              <StyledMessage key={id || index} isSelfMessage={isSelfMessage}>
                <StyledAvatar src={avatar} alt="avatar" />
                <div>
                  <StyledUserName>{userName}</StyledUserName>
                  <StyledText>{text}</StyledText>
                </div>
              </StyledMessage>
            )
          )}
        </StyledMessageList>
      </StyledMessageBlock>
    );
  }
}

MessageBlock.propTypes = {
  getMessageBlockRef: PropTypes.func,
  messages: PropTypes.array
};

export default MessageBlock;
