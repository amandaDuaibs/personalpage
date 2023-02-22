import React, { FC, ReactElement, Suspense } from 'react';
import { RouteConfig } from '../globalTypes';
import { Routes, Route } from 'react-router-dom';
import routes from './static_config';


const Router: FC = (): ReactElement => {
  return (
    <Suspense fallback="Loading...">
      
      <Routes>
          {routes.map((routeItem: RouteConfig, _index: number) => {
            return (
              <Route
                key={routeItem.path}
                path={routeItem.path}
                element={routeItem.component}
                caseSensitive={false}
              />
            );
          })}
        </Routes>
    </Suspense>
  );
};

export default Router;