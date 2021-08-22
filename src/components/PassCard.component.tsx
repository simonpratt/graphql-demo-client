import React from 'react';
import styled from 'styled-components';
import dayjs from 'dayjs';
import { Badge, Card, Text } from '@dtdot/lego';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendar, faClock, faLocationArrow } from '@fortawesome/free-solid-svg-icons';

const IconContainer = styled.div`
  width: 28px;
  display: inline-flex;
  justify-content: center;
`;

export interface PassCardProps {
  pass: {
    id: string;
    status: string;
    date: string;
    user: {
      name: string;
      email: string;
    };
    site: {
      name: string;
      address: string;
    };
  };
}

const PassCard = ({ pass }: PassCardProps) => {
  return (
    <Card key={pass.id}>
      <Card.Header
        image='https://meetthepressmasterclass.com.au/wp-content/uploads/default-user-image.png'
        heading={pass.user.name}
        subHeading={pass.user.email}
        meta={<Badge variant='success'>{pass.status}</Badge>}
      />
      <Card.Content>
        <IconContainer>
          <FontAwesomeIcon icon={faClock} />
        </IconContainer>
        {dayjs(pass.date).format('HH:mmA')}
      </Card.Content>
      <Card.Content>
        <IconContainer>
          <FontAwesomeIcon icon={faCalendar} />
        </IconContainer>
        {dayjs(pass.date).format('DD MMMM YYYY')}
      </Card.Content>
      <Card.Content>
        <IconContainer>
          <FontAwesomeIcon icon={faLocationArrow} />
        </IconContainer>
        {pass.site.name} <Text variant='secondary'>({pass.site.address})</Text>
      </Card.Content>
    </Card>
  );
};

export default PassCard;
