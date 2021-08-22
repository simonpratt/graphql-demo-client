import React from 'react';
import styled from 'styled-components';
import { Card } from '@dtdot/lego';
import { Link } from 'react-router-dom';

const StyledLink = styled(Link)`
  text-decoration: none;
`;

const CenterDiv = styled.div`
  width: 100%;
  text-align: center;
`;

const PointerCard = styled(Card)`
  cursor: pointer;
`;

const AddCard = () => {
  return (
    <StyledLink to='/activity/site/add'>
      <PointerCard size='xs'>
        <Card.Content>
          <CenterDiv>Add</CenterDiv>
        </Card.Content>
      </PointerCard>
    </StyledLink>
  );
};

export default AddCard;
