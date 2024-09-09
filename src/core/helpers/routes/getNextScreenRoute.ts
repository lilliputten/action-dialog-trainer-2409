import { EGameType, EScenarioType, defaultGameType, defaultScenarioType } from 'src/core/types';
import { getGameRoute } from './getGameRoute';

export function getNextScreenRoute(
  game: EGameType = defaultGameType,
  scenario: EScenarioType = defaultScenarioType,
  screen: number = 0,
  doRoot?: boolean,
) {
  return getGameRoute(game, scenario, screen + 1, doRoot);
}
