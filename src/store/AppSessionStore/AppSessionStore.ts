import {
  makeObservable,
  observable,
  action,
  computed,
  IReactionDisposer,
  reaction,
  runInAction,
} from 'mobx';
import bound from 'bind-decorator';

import {
  TMuiThemeMode,
  validMuiThemeModes,
  defaultMuiThemeMode,
  TUpdatableParameter,
  // EScenarioType,
} from 'src/core/types';
import { getSavedOrQueryParameter } from 'src/core/helpers/generic';

const storagePrefix = 'AppSessionStore:';

/** Parameters what could be saved (via `saveParameter`) and restored from the
 * local storage (or from url query, via `restoreParameters`)
 * TODO: To derive it from `updatableParameters`?
 */
const queryParameters = [
  // prettier-ignore
  'themeMode',
  'useDemo',
] as const;
export type TQueryParameter = (typeof queryParameters)[number];

/** Parameters to save to the local storage */
const saveableParameters = queryParameters.filter(
  (_id) =>
    // Exclude auto load urls...
    // !id.startsWith('autoLoadUrl') && !nonSaveableParameters.includes(id),
    true,
);

/** Updatable parameters descriptions */
const updatableParameters: TUpdatableParameter<TQueryParameter>[] = [
  { id: 'useDemo', type: 'boolean' },
  { id: 'themeMode', type: 'string', validValues: validMuiThemeModes },
];

export class AppSessionStore {
  // NOTE: remember to clean/reset properties in `clearData` or in `clearSettings`

  // Session reaction disposers...
  staticDisposers?: IReactionDisposer[];

  /* Allow to use demo */
  @observable useDemo: boolean = false;

  @observable inited: boolean = false;
  @observable finished: boolean = false;
  @observable ready: boolean = false;
  @observable error?: Error;

  // // User flow state...
  // @observable started?: boolean = false;
  // @observable scenario?: EScenarioType;
  // @observable screen?: number;

  // Settings...

  /** Application theme */
  @observable themeMode: TMuiThemeMode = defaultMuiThemeMode;
  @observable fullscreen: boolean = window.innerHeight === window.screen.height;

  // Lifecycle...

  constructor() {
    makeObservable(this);
    this.setStaticReactions();
    this.restoreParameters();
  }

  async destroy() {
    this.clearData();
    this.resetStaticReactions();
  }

  // Core getters...

  /** Is current status final and successful (started, stopped)? */
  @computed get isFinished() {
    return this.finished;
  }

  // Init settings...

  /** Initialize default parameters */
  restoreParameters() {
    updatableParameters.forEach((paramItem) => {
      const { id } = paramItem;
      const val = getSavedOrQueryParameter(paramItem, { storagePrefix, showWarining: true });
      if (val != null) {
        runInAction(() => {
          // @ts-ignore
          this[id] = val;
        });
        // eslint-disable-next-line no-console
        console.info('[AppSessionStore:restoreParameters] Updated parameter', id, '=', val);
      }
    });
  }

  /** Save parameter into the storage */
  saveParameter(id: TQueryParameter) {
    const hasLocalStorage = typeof localStorage !== 'undefined';
    if (hasLocalStorage) {
      const storageId = [storagePrefix, id].filter(Boolean).join('');
      const val = this[id];
      /* console.log('[AppSessionStore:saveParameter]', {
       *   id,
       *   val,
       *   storageId,
       * });
       */
      localStorage.setItem(storageId, String(val));
    }
  }

  /** Initialize settings (reserved for future use */
  initSettings(): Promise<void> {
    // TODO?
    return Promise.resolve();
  }

  // Core setters...

  @action setInited(inited: typeof AppSessionStore.prototype.inited) {
    this.inited = inited;
  }

  @action setFinished(finished: typeof AppSessionStore.prototype.finished) {
    this.finished = finished;
  }

  @action setReady(ready: typeof AppSessionStore.prototype.ready) {
    this.ready = ready;
  }

  // @action setStarted(started: typeof AppSessionStore.prototype.started) {
  //   this.started = started;
  // }
  //
  // @action setScenario(scenario: typeof AppSessionStore.prototype.scenario) {
  //   this.scenario = scenario;
  // }
  //
  // @action setScreen(screen: typeof AppSessionStore.prototype.screen) {
  //   this.screen = screen;
  // }

  @action setError(error: typeof AppSessionStore.prototype.error) {
    this.error = error;
  }

  @bound clearError() {
    this.setError(undefined);
  }

  // Reactions...

  // Misc setters...

  @action setThemeMode(themeMode: typeof AppSessionStore.prototype.themeMode) {
    this.themeMode = themeMode;
  }

  @action setFullscreen(fullscreen: typeof AppSessionStore.prototype.fullscreen) {
    this.fullscreen = fullscreen;
  }

  // Generic utilities...

  @action clearData() {
    this.ready = false;
    this.error = undefined;

    // this.started = false;
    // this.scenario = undefined;
    // this.screen = undefined;

    // Reset settings?
    this.clearSettings();
  }

  // Settings...

  @action clearSettings() {
    // TODO: Use saved on initialization default values and list of resetable parameters...
    this.themeMode = defaultMuiThemeMode;
    this.fullscreen = window.innerHeight === window.screen.height;
  }

  // Reactions...

  setStaticReactions() {
    this.staticDisposers = [
      // prettier-ignore
      // Add reactions to save all the saveable parameters to the local storage...
      ...saveableParameters.map((id) =>
        reaction(() => this[id], this.saveParameter.bind(this, id)),
      ),
    ];
  }
  resetStaticReactions() {
    const { staticDisposers } = this;
    // Reset all disposers...
    if (Array.isArray(staticDisposers) && staticDisposers.length) {
      staticDisposers.forEach((disposer) => disposer());
    }
    this.staticDisposers = undefined;
  }
}
