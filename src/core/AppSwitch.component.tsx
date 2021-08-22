import React from 'react';
import { Switch, Route } from 'react-router-dom';
import ActivityPage from '../pages/activity/Activity.page';

const AppSwitch = () => {
  return (
    <Switch>
      <Route path='/activity'>
        <ActivityPage />
      </Route>
    </Switch>
  );
};

export default AppSwitch;
