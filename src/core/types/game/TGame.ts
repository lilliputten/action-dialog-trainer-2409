import { SxProps } from '@mui/material';

import { EGameType, EScenarioType } from 'src/core/types/game';

export interface TAnswer {
  text?: string;
  isCorrect?: boolean;
  buttonSx?: SxProps;
}

export interface TScreen {
  videoUrl: string;
  // finalSplashUrl: string;
  answers?: TAnswer[];
  finalComment?: string;
  finalImage?: string;
}

export interface TScenario {
  id: EScenarioType;
  name?: string;
  selectButtonSx?: SxProps;
  screens: TScreen[];
}

export type TGame = {
  id: EGameType;
  name?: string;
  startVideoUrl: string;
  scenarios: TScenario[];
};
