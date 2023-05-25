import { FC } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import routesConfig, { RouteConfig, RootRedirect } from './config';
import RouteTrackingWrapper from './route-tracking-wrapper';

const RouteRenderer: FC = () => {
  return (
    <Routes>
      {/* Redirect users from / to /home route */}
      <Route caseSensitive element={<Navigate to={RootRedirect.to} />} path={RootRedirect.from} />

      {/* Define routes by looping through route config file */}
      {Object.values<RouteConfig>(routesConfig)
        .filter(route => !route.root)
        .map((route, index) => (
          <Route
            key={`route-${index}`}
            caseSensitive
            path={route.path}
            element={
              route.component && (
                <RouteTrackingWrapper pageType={route.pageType || ''}>
                  <route.component />
                </RouteTrackingWrapper>
              )
            }
          >
            {Object.values(route.nestedRoutes || {})?.map((nestedRoute, nestedIndex) => (
              <Route
                key={`nested-route-${nestedIndex}`}
                path={nestedRoute.path}
                element={nestedRoute.component && <nestedRoute.component />}
              />
            ))}
          </Route>
        ))}
    </Routes>
  );
};

export default RouteRenderer;
