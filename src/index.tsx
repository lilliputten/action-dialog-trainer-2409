import React from 'react';
import ReactDOM from 'react-dom/client';

// import { makeServer } from 'src/mirage-server/makeServer';

import reportWebVitals from 'src/reportWebVitals';
import { AppRoot } from 'src/pages/app/AppRoot';
// import { toBoolean } from './core/helpers/basic';

import 'src/core/global/global-includes';
import 'src/core/global/global-styles.scss';

const rootNode = document.getElementById('root') as HTMLElement;
const root = ReactDOM.createRoot(rootNode);

const __debugUseStrictMode = false;

let RootNode = <AppRoot />;

if (__debugUseStrictMode) {
  RootNode = (
    <React.StrictMode>
      {/* Execute main content with strict mode */}
      {RootNode}
    </React.StrictMode>
  );
}

/* // UNUSED: Mirage server
 * if (toBoolean(process.env.USE_MIRAGE_SERVER)) {
 *   // eslint-disable-next-line no-console
 *   console.warn('** USE_MIRAGE_SERVER: Running with mirage api server **');
 *   makeServer({ environment: 'development' });
 * }
 */

root.render(RootNode);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
