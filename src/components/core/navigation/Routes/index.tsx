import React, { FC } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

import ROUTER from 'config/app/router';
import { Feed, NotFound } from 'screens';

const Routes: FC = () => {
  const { routes } = ROUTER;

  return (
    <Switch>
      <Route component={Feed} name={routes.feed.name} path={routes.feed.path} />
      <Route exact path={routes.root.path}>
        <Redirect to={routes.default.path} />
      </Route>
      <Route component={NotFound} />
    </Switch>
  );
};

export default Routes;
