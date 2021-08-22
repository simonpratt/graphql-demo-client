import React from 'react';
import styled from 'styled-components';
import { Card } from '@dtdot/lego';
import { Link } from 'react-router-dom';

export interface SiteListProps {
  selectedId?: string;
}

const StyledLink = styled(Link)`
  text-decoration: none;
`;

const sites = [
  {
    id: '1',
    name: 'Sine HQ',
    address: '100 Pirie Street',
    passCount: {
      active: 32,
    },
  },
  {
    id: '2',
    name: 'Sine HQ',
    address: '100 Pirie Street',
    passCount: {
      active: 32,
    },
  },
  {
    id: '3',
    name: 'Sine HQ',
    address: '100 Pirie Street',
    passCount: {
      active: 32,
    },
  },
];

const SiteList = ({ selectedId }: SiteListProps) => {
  return (
    <>
      {sites.map((site) => (
        <StyledLink key={site.id} to={`/activity/site/${site.id}`}>
          <Card size='xs'>
            <Card.Content>{site.name}</Card.Content>
            <Card.SubContent>{site.address}</Card.SubContent>
            <Card.Spacer />
            <Card.SubContent>{site.passCount.active} active passes</Card.SubContent>
          </Card>
        </StyledLink>
      ))}
    </>
  );
};

export default SiteList;
