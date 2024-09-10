import { SxProps } from '@mui/material';

import { TUrl } from 'src/core/types/generic';

import { EDialogGameType } from './EDialogGameType';

export type TDialogScreenId = string;

export interface TDialogAnswer {
  text?: string;
  // isCorrect?: boolean;
  buttonSx?: SxProps;
  goTo?: TDialogScreenId;
}

export interface TDialogScreen {
  id: TDialogScreenId;
  videoUrl?: TUrl;
  // finalSplashUrl: TUrl;
  answers?: TDialogAnswer[];
  showQuote?: string;
  showQuestion?: string;
  showComment?: string;
  // finalImage?: TUrl;
  goTo?: TDialogScreenId;
}

export type TDialogGame = {
  id: EDialogGameType;
  name?: string;
  startVideoUrl?: TUrl;
  screens: TDialogScreen[];
};
