import React from 'react';
import { observer } from 'mobx-react-lite';

import { isDevBrowser } from 'src/core/constants/config';
import { showError } from 'src/ui/Basic';
import { getErrorText } from 'src/core/helpers/basic';
import { useAppSessionStore } from 'src/store/AppSessionStore';
import { RouterWrapper } from 'src/routes/RouterWrapper';

/** DEBUG: Don't wait for user action */
const __debugEmulateDataReady = false && isDevBrowser;

function useAppSessionInit() {
  const appSessionStore = useAppSessionStore();
  // Init session store...
  React.useEffect(() => {
    // Init options, parameters and settings...
    appSessionStore
      .initSettings()
      .then(() => {
        appSessionStore.setReady(true);
      })
      .catch((error) => {
        const errMsg = [
          // prettier-ignore
          'Cannot to initialize app session store settings',
          getErrorText(error),
        ]
          .filter(Boolean)
          .join(': ');
        const err = new Error(errMsg);
        // eslint-disable-next-line no-console
        console.error('[AppRouterWrapper:useAppSessionInit]', errMsg, {
          err,
          error,
        });
        // eslint-disable-next-line no-debugger
        debugger;
        showError(err);
        // throw error;
      });
  }, [appSessionStore]);
  /* UNUSED: // Init data store and provide data store link to session (its' wrong to mix session and data)...
   * React.useEffect(() => {
   *   // Set ready flag for demo mode. Otherwise it'll be set in `AppCoreStart` after data load
   *   if (__debugEmulateDataReady) {
   *     // TODO: Set demo data?
   *     appDataStore.setReady(true);
   *   }
   *   appSessionStore.setAppDataStore(appDataStore);
   *   return () => {
   *     appSessionStore.setAppDataStore(undefined);
   *   };
   * }, [appDataStore, appSessionStore]);
   * // Set load new data callback into the session store...
   * const loadNewData = React.useCallback(() => {
   *   // console.log('[AppRouterWrapper:loadNewData]');
   *   appDataStore.setReady(false);
   * }, [appDataStore]);
   * React.useEffect(() => {
   *   // Set (and reset) handler for navigate to data load page...
   *   appSessionStore.setLoadNewDataCb(loadNewData);
   *   return () => {
   *     appSessionStore.setLoadNewDataCb(undefined);
   *   };
   * }, [appSessionStore, loadNewData]);
   */
}

export const AppRouterWrapper: React.FC = observer(() => {
  useAppSessionInit();
  return <RouterWrapper />;
});
