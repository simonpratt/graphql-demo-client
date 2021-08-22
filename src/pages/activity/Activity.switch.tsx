import React from 'react';
import { Switch, Route } from 'react-router-dom';
import PassesPanel from '../../panels/passes/Passes.panel';
import AddSitePanel from '../../panels/sites/AddSite.panel';
import SitePanel from '../../panels/sites/Site.panel';

const ActivitySwitch = () => {
  return (
    <Switch>
      <Route path='/activity/passes'>
        <PassesPanel />
      </Route>
      <Route path='/activity/site/add'>
        <AddSitePanel />
      </Route>
      <Route path='/activity/site/:siteId'>
        <SitePanel />
      </Route>
    </Switch>
  );
};

export default ActivitySwitch;
