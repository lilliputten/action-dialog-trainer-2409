import { SxProps } from '@mui/material';

import { TUrl } from 'src/core/types/generic';

import { EDialogGameType } from './EDialogGameType';
import { TDialogScreenId } from './TDialogScreenId';

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
  answersSx?: SxProps;
  textsSx?: SxProps;
  showQuestionSx?: SxProps;
  showQuoteSx?: SxProps;
  showCommentSx?: SxProps;
}

export type TDialogGame = {
  id: EDialogGameType;
  name?: string;
  startVideoUrl?: TUrl;
  defaultScreenId: TDialogScreenId;
  screens: TDialogScreen[];
};
