import React from 'react';
import { Switch, Route } from 'react-router-dom';
import ActivityPage from '../pages/activity/Activity.page';
import SitesPage from '../pages/sites/Sites.page';

const AppSwitch = () => {
  return (
    <Switch>
      <Route path='/activity'>
        <ActivityPage />
      </Route>
      <Route path='/sites'>
        <SitesPage />
      </Route>
    </Switch>
  );
};

export default AppSwitch;
