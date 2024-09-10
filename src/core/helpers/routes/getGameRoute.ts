import { EDialogGameType, TDialogScreenId, defaultDialogGameType } from 'src/core/types';

export function getGameRoute(
  game: EDialogGameType = defaultDialogGameType,
  screen?: TDialogScreenId,
  doRoot?: boolean,
  // scenario: EScenarioType = defaultScenarioType,
) {
  let url = `game/${game}/${screen}`;
  if (doRoot) {
    url = '/' + url;
  }
  return url;
}
