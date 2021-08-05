import React, { useState } from 'react';
import { Menu } from '@dtdot/lego';
import SiteList from './internal/SiteList.component';

const SitesPage = () => {
  const [adding, setAdding] = useState(false);
  const [selectedId, setSelectedId] = useState<string>();

  const handleSelect = (id: string) => {
    setAdding(false);
    setSelectedId(id);
  };

  const handleAdd = () => {
    setAdding(true);
    setSelectedId(undefined);
  };

  return (
    <Menu.Content panelSize='sm'>
      <Menu.Panel>
        <SiteList selectedId={selectedId} onSelect={handleSelect} onAdd={handleAdd} />
      </Menu.Panel>
      <Menu.Page>
        {adding && <div>adding</div>}
        {selectedId && <div>site</div>}
      </Menu.Page>
    </Menu.Content>
  );
};

export default SitesPage;
