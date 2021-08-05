import React from 'react';
import styled from 'styled-components';
import { Card, CardGroup, PaddedLayout } from '@dtdot/lego';

const CenterDiv = styled.div`
  width: 100%;
  text-align: center;
`;

const PointerCard = styled(Card)`
  cursor: pointer;
`;

export interface SiteListProps {
  selectedId?: string;
  onAdd: () => void;
  onSelect: (id: string) => void;
}

const SiteList = ({ selectedId, onAdd, onSelect }: SiteListProps) => {
  return (
    <PaddedLayout.Small>
      <CardGroup.Small>
        <Card onClick={() => onSelect('123')} size='xs'>
          <Card.Content>Sine HQ</Card.Content>
          <Card.Spacer />
          <Card.SubContent>100 Pirie Street</Card.SubContent>
        </Card>
        <Card size='xs'>
          <Card.Content>Sine HQ</Card.Content>
          <Card.Spacer />
          <Card.SubContent>100 Pirie Street</Card.SubContent>
        </Card>
        <Card size='xs'>
          <Card.Content>Sine HQ</Card.Content>
          <Card.Spacer />
          <Card.SubContent>100 Pirie Street</Card.SubContent>
        </Card>
        <PointerCard size='xs' onClick={onAdd}>
          <Card.Content>
            <CenterDiv>Add</CenterDiv>
          </Card.Content>
        </PointerCard>
      </CardGroup.Small>
    </PaddedLayout.Small>
  );
};

export default SiteList;
