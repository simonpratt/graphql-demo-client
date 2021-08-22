import React from 'react';
import { Menu, CardGroup, PaddedLayout } from '@dtdot/lego';

import SiteList from './internal/SiteList.component';
import AddCard from './internal/AddCard.component';
import ActivitySwitch from './Activity.switch';

const ActivityPage = () => {
  return (
    <Menu.Content panelSize='sm'>
      <Menu.Panel>
        <PaddedLayout.Small>
          <CardGroup.Small>
            <SiteList selectedId={'1'} />
            <AddCard />
          </CardGroup.Small>
        </PaddedLayout.Small>
      </Menu.Panel>
      <Menu.Page>
        <ActivitySwitch />
      </Menu.Page>
    </Menu.Content>
  );
};

export default ActivityPage;
