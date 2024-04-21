import { lazy } from 'react';

import { useRoutes } from 'react-router-dom';
import { Navigate } from 'react-router-dom';


export default function AppRouter() {
  let element = useRoutes([
    {
      path: '/',
      element: <Navigate to="/" />,
    },
  ]);

  return element;
}
