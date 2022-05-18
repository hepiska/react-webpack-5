import React, { FC } from 'react';
import { Routes, Route } from 'react-router-dom';
import routes from './routes';

const renderRoute = (route: any) => {
  const renderRoutes = (routes: any) => {
    if (routes) {
      return routes.map(renderRoute);
    }
    return null;
  };
  return (
    <Route path={route.path} key={route.name} element={<route.component />}>
      {renderRoutes(route.routes)}
    </Route>
  );
};

const Pages: FC<any> = () => {
  return <Routes>{routes.map(renderRoute)}</Routes>;
};

export default Pages;
