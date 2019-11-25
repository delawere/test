import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledContainer = styled.div`
  width: calc(70% - 1px);
  height: 5em;
  position: absolute;
  bottom: 0;
  margin-left: calc(30% + 1px);
  z-index: 1;
  background-color: white;
  display: flex;
  align-items: center;
  border-top: 1px solid #d5d5d5;
`;

const StyledTextField = styled.textarea`
  display: inline-block;
  width: 80%;
  height: 100%;
  padding: 0.8em;
  padding-left: 1.4em;
  box-sizing: border-box;
  outline: none;
  border: none;
  font-size: 1rem;
  resize: none;
`;

const StyledSendButton = styled.button`
  border: none;
  background-color: inherit;
  margin-left: auto;
  margin-right: 1.5em;
  outline: none;
  cursor: pointer;
`;

const StyledSVG = styled.svg`
  width: 2.5em;
  fill: white;
  background-color: #007bff;
  padding: 0.65em;
  border-radius: 50%;
`;

const enterKeyCode  = 13;

class TextFieldBlock extends Component {
  constructor(props) {
    super(props);

    this.state = {
      message: ''
    };
  }

  onChange = e => {
    this.setState({
      message: e.target.value
    });
  };

  onClick = () => {
    const { onSubmit } = this.props;
    const { message } = this.state;

    onSubmit(message);
    this.setState({
      message: ''
    });
  };

  onKeyDown = e => {
    const { message } = this.state;

    if (e.metaKey && e.keyCode === enterKeyCode) {
      e.preventDefault();
      this.setState({
        message: message + '\n'
      });
    }
  };

  onKeyPress = e => {
    if (e.charCode === enterKeyCode) {
      e.preventDefault();
      this.onClick();
    }
  };

  render() {
    return (
      <StyledContainer>
        <StyledTextField
          placeholder="Write a message..."
          onChange={e => this.onChange(e)}
          value={this.state.message}
          onKeyPress={this.onKeyPress}
          onKeyDown={this.onKeyDown}
        ></StyledTextField>
        <StyledSendButton onClick={this.onClick}>
          <StyledSVG id="icon-arrow-right" viewBox="0 0 24 24">
            <title>arrow-right</title>
            <path d="M11.293 5.707l5.293 5.293h-11.586c-0.552 0-1 0.448-1 1s0.448 1 1 1h11.586l-5.293 5.293c-0.391 0.391-0.391 1.024 0 1.414s1.024 0.391 1.414 0l7-7c0.092-0.092 0.166-0.202 0.217-0.324 0.101-0.245 0.101-0.521 0-0.766-0.049-0.118-0.121-0.228-0.217-0.324l-7-7c-0.391-0.391-1.024-0.391-1.414 0s-0.391 1.024 0 1.414z"></path>
          </StyledSVG>
        </StyledSendButton>
      </StyledContainer>
    );
  }
}

TextFieldBlock.propTypes = {
  onSubmit: PropTypes.func
};

export default TextFieldBlock;
