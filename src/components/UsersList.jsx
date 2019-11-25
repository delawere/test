import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import User from './User';

const StyledContainer = styled.div`
  width: 30%;
  overflow: auto;
  border-right: 1px solid #d5d5d5;
  overflow: auto;
`;
const StyledList = styled.ul`
  list-style-type: none;
  padding-left: 18px;
`;

const UsersList = ({ users, currentUserProfile }) => (
  <StyledContainer>
    {currentUserProfile}
    <StyledList>
      {users.map((user, i) => {
        const { name, secname, avatar, id } = user;
        return (
          <User userName={`${name} ${secname}`} avatar={avatar} key={id} />
        );
      })}
    </StyledList>
  </StyledContainer>
);

UsersList.propTypes = {
  users: PropTypes.array,
  currentUserProfile: PropTypes.element
};

export default UsersList;
