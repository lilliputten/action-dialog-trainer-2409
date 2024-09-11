import { RouteObject } from 'react-router-dom';

import { demoRoute, rootUrl } from './appUrls';

import { AppRootLayout } from 'src/pages/app/AppRootLayout';
import { DemoPage } from 'src/pages/app/DemoPage';
// import { TestPage } from 'src/pages/app/TestPage';
import { NotFoundPage } from 'src/pages/app/NotFoundPage';

import { GameScreenPage } from 'src/pages/game/GameScreenPage';
// import { SelectGameScenarioPage } from 'src/pages/game/SelectGameScenarioPage';
import { StartGamePage } from 'src/pages/game/StartGamePage';
import { GameFinishedPage } from 'src/pages/game/GameFinishedPage';

/** Routes
 * @see src/routes/appUrls.ts
 * @see https://reactrouter.com/en/main/route/route
 */
export const routes: RouteObject[] = [
  {
    path: rootUrl,
    element: <AppRootLayout />,
    children: [
      { index: true, element: <StartGamePage /> },
      { path: 'start/:game', element: <StartGamePage /> },
      { path: 'game/:game', element: <StartGamePage /> },
      { path: 'game/:game/start', element: <GameScreenPage /> },
      { path: 'game/:game/finished', element: <GameFinishedPage /> },
      { path: 'game/:game/:screen', element: <GameScreenPage /> },
      { path: demoRoute, element: <DemoPage /> }, // NOTE: Debug only!
      // { path: testRoute, element: <TestPage /> }, // NOTE: Debug only!
      { path: '*', element: <NotFoundPage /> },
    ],
  },
];
