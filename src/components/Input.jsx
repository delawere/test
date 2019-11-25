import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledContainer = styled.div`
  width: 100%;
  max-width: 300px;
  margin-bottom: 1.25em;
`;

const StyledInput = styled.input`
  width: 100%;
  box-sizing: border-box;
  border: none;
  border-radius: 6px;
  font-size: 1rem;
  padding: 0.85em 1em;
  margin-top: 5px;
  background: #f5f6f7;
  color: #444;
  outline: none;
  border: 2px solid #eee;

  &:focus {
    border: 2px solid #a1c4fd;
  }
`;

const StyledLabel = styled.span`
  display: inline-block;
  padding-left: 3px;
  font-weight: 500;
`;

const Input = ({ type, name, value, placeholder, onChange }) => (
  <StyledContainer>
    <StyledLabel>{placeholder}</StyledLabel>
    <StyledInput
      type={type}
      name={name}
      value={value}
      onChange={onChange}
    ></StyledInput>
  </StyledContainer>
);

Input.propTypes = {
  type: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.string,
  placeholder: PropTypes.string,
  onChange: PropTypes.func
};

export default Input;
