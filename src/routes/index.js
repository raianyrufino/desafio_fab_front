import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './Route';
import routes from './routes';
import { dynamicImportRouter } from '~/utils/router';

const Routes = () => (
  <Switch>
    {routes.map((route, index) => {
      let component = dynamicImportRouter(route.component);

      return (
        <Route
          exact={route.exact}
          key={index}
          path={route.path}
          component={component}
          titulo={route.title}
          breadcrumbs={route.breadcrumbs}
          isPrivate={route.auth}
        />
      );
    })}
    <Route path="*" component={() => 'Page not found.'} />
  </Switch>
);

export default Routes;
