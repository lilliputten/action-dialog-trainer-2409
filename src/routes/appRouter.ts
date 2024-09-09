import {
  // createBrowserRouter,
  // createMemoryRouter,
  createHashRouter,
} from 'react-router-dom';

import { routes } from './appRoutes';

export const router = createHashRouter(routes);
