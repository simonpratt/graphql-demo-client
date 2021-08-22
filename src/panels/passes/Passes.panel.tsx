import { Button, CardGroup, ContentLayout, SubHeading } from '@dtdot/lego';
import React, { useState } from 'react';
import PassCard from '../../components/PassCard.component';
import SignInModal from '../../modals/SignIn.modal';

const passes = [
  {
    id: '123',
    status: 'approved',
    date: '2021-08-22T03:11:07Z',
    user: {
      name: 'Simon',
      email: 'simon.pratt@sine.co',
    },
    site: {
      name: 'Sine HQ',
      address: '100 Pirie Street',
    },
  },
];

const PassesPanel = () => {
  const [showSignIn, setShowSignIn] = useState(false);

  return (
    <>
      <ContentLayout>
        <ContentLayout.Header actions={<Button onClick={() => setShowSignIn(true)}>Check in</Button>}>
          <SubHeading>Activity</SubHeading>
        </ContentLayout.Header>
        <ContentLayout.Content>
          <CardGroup>
            {passes.map((pass) => (
              <PassCard key={pass.id} pass={pass} />
            ))}
          </CardGroup>
        </ContentLayout.Content>
      </ContentLayout>
      {showSignIn && <SignInModal onClose={() => setShowSignIn(false)} />}
    </>
  );
};

export default PassesPanel;
