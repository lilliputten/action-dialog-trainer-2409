import { EGameType, EScenarioType } from 'src/core/types';

export type TGameRouterParams = {
  game?: EGameType;
  scenario?: EScenarioType;
  screen?: string; // NOTE: It's a number!
};
