import { EDialogGameType, TDialogScreenId, defaultDialogGameType } from 'src/core/types';
import { getGameRoute } from './getGameRoute';

export function getNextScreenRoute(
  game: EDialogGameType = defaultDialogGameType,
  // scenario: EScenarioType = defaultScenarioType,
  screen?: TDialogScreenId, // number = 0,
  doRoot?: boolean,
) {
  return getGameRoute(
    game,
    // scenario,
    screen,
    doRoot,
  );
}
