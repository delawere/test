import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledErrorBlock = styled.div`
  margin: 0 auto;
  box-shadow: 0 0 3px #ddd;
  overflow: hidden;
  width: 100%;
  box-sizing: border-box;
  position: absolute;
  top: 0;
  color: white;
  text-align: center;
  display: ${props => (props.visible ? '' : 'none')};
  background-color: #f55;
`;

const StyledErrorMessage = styled.div`
  font-size: 1.1rem;
  padding: 0.5em 0.75em;
  font-weight: 400;
`;

const Error = ({ error }) => (
  <StyledErrorBlock visible={error}>
    <StyledErrorMessage>{error}</StyledErrorMessage>
  </StyledErrorBlock>
);

Error.propTypes = {
  error: PropTypes.string
};

export default Error;
