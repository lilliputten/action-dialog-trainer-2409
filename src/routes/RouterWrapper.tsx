import React from 'react';
import { RouterProvider } from 'react-router-dom';

import { router } from './appRouter';

export const RouterWrapper: React.FC = () => {
  return <RouterProvider router={router} />;
};
