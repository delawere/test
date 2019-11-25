import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledItem = styled.li`
  margin: 0.75em 0;
`;
const StyledAvatar = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin-right: 0.4em;
`;

const User = ({ userName, avatar }) => (
  <StyledItem>
    <StyledAvatar src={avatar} />
    {userName}
  </StyledItem>
);

User.propTypes = {
  userName: PropTypes.string,
  avatar: PropTypes.string
};

export default User;
