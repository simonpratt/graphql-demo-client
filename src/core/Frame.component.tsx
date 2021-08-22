import React from 'react';
import { Menu, menuHelpers } from '@dtdot/lego';
import { Link, withRouter } from 'react-router-dom';
import styled from 'styled-components';

const StyledLink = styled(Link)`
  text-decoration: none;
`;

interface FrameProps {
  location: any;
}

const Frame = ({ location }: FrameProps) => {
  console.log(location);
  return (
    <Menu>
      <Menu.Heading>GraphQL Demo</Menu.Heading>
      <StyledLink to='/activity/passes'>
        <Menu.Item active={menuHelpers.isActiveItem([/activity/g], location.pathname)}>Activity</Menu.Item>
      </StyledLink>
      {/* <StyledLink to='/sites'>
        <Menu.Item active={menuHelpers.isActiveItem([/sites/g], location.pathname)}>Sites</Menu.Item>
      </StyledLink> */}
      <StyledLink to='/users'>
        <Menu.Item active={menuHelpers.isActiveItem([/users/g], location.pathname)}>Users</Menu.Item>
      </StyledLink>
    </Menu>
  );
};

export default withRouter(Frame);
