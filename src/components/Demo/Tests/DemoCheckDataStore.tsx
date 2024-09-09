import { observer } from 'mobx-react-lite';

import { TDemoComponent } from 'src/core/types';
import { useAppSessionStore } from 'src/store';

export const DemoCheckDataStore: TDemoComponent = observer(() => {
  const appSessionStore = useAppSessionStore();
  const {
    // prettier-ignore
    inited,
    finished,
    ready,
    error,
  } = appSessionStore;
  /* // UNUSED: Show data state
   * const {
   *   // prettier-ignore
   *   testData,
   * } = appDataStore;
   */
  return (
    <div className="DemoCheckDataStore">
      {/* ... */}
      <h1>DemoCheckDataStore</h1>
      <p>inited: {String(inited)}</p>
      <p>finished: {String(finished)}</p>
      <p>ready: {String(ready)}</p>
      <p>error: {String(error)}</p>
      {/* // UNUSED: Show data state
      <p>testData: {getAppDataInfo(testData)}</p>
      */}
    </div>
  );
});

DemoCheckDataStore.__title = 'Basic data store check';
