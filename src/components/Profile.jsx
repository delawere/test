import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledProfile = styled.div`
  box-sizing: border-box;
  background-color: white;
  padding: 0.8em 0;
  padding-left: 18px;
  color: #444;
  width: 100%;
  overflow: hidden;
  border-bottom: 1px solid #d5d5d5;
`;

const StyledImg = styled.img`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  margin-right: 10px;
  float: left;
`;

const StyledUserName = styled.span`
  display: inline-block;
  font-weight: 500;
  font-size: 1.15rem;
  margin-bottom: 0.15em;
`;

const StyledLogout = styled.a`
  display: inline-block;
  text-decoration: none;
  color: #ababab;
  font-size: 1rem;

  &:hover {
    color: #444;
  }
`;

const Profile = ({ userName, avatar, onLogout }) => (
  <StyledProfile>
    <StyledImg src={avatar}></StyledImg>
    <StyledUserName>{userName}</StyledUserName>
    <br />
    <StyledLogout href="#" onClick={onLogout}>
      Log out
    </StyledLogout>
  </StyledProfile>
);

Profile.propTypes = {
  userName: PropTypes.string,
  avatar: PropTypes.string,
  onLogout: PropTypes.func
};

export default Profile;
