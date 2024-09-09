import { EGameType, EScenarioType, defaultGameType, defaultScenarioType } from 'src/core/types';

export function getGameRoute(
  game: EGameType = defaultGameType,
  scenario: EScenarioType = defaultScenarioType,
  screen: number = 1,
  doRoot?: boolean,
) {
  let url = `game/${game}/${scenario}/${screen}`;
  if (doRoot) {
    url = '/' + url;
  }
  return url;
}
