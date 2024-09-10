import { TDialogScreenId } from './TDialogScreenId';
import { EDialogGameType } from './EDialogGameType';

export type TGameRouterParams = {
  game?: EDialogGameType;
  // scenario?: EScenarioType;
  screen?: TDialogScreenId;
};
