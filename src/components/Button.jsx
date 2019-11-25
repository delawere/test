import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledButton = styled.button`
  background-color: #3988f2;
  box-sizing: border-box;
  display: inline-block;
  padding: 0.6em 3em;
  font-size: 1.2rem;
  font-weight: 600;
  text-decoration: none;
  color: #fff;
  border: none;
  border-radius: 4px;
  text-align: center;
  margin-top: 1em;
  cursor: pointer;
  transition: 100ms ease-in-out;

  &:hover {
    background-color: #217af0;
  }
`;

const Button = ({ title, onClick }) => (
  <StyledButton onClick={onClick}>{title}</StyledButton>
);

Button.propTypes = {
  title: PropTypes.string,
  onClick: PropTypes.func
};

export default Button;
