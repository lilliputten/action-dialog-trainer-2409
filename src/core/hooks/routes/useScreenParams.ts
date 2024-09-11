import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { dialogGamesHash } from 'src/core/constants/game/dialogs';

import { TDialogScreenId, TGameRouterParams } from 'src/core/types';
import { EDialogGameType, dialogGameTypes } from 'src/core/types/game/EDialogGameType';

interface TScreenParamsOptions {
  allowNoGame?: boolean;
  allowNoScreen?: boolean;
  allowNoScenario?: boolean;
}

export interface TScreenParamsResult {
  gameId: EDialogGameType;
  // scenarioId: EDialogScenarioType;
  // screenNo: number;
  screenId: TDialogScreenId;
}

export function useScreenParams(opts: TScreenParamsOptions | undefined = undefined) {
  // TODO: Use options, eg: allowNoScreen, allowNoScenario
  // Eg page url: /game/first/irina/1
  const navigate = useNavigate();
  const {
    game: gameId,
    // scenario: scenarioId,
    screen,
  } = useParams<TGameRouterParams>();
  // const screenNo = Number(screen);
  const isValidGame = !!gameId && dialogGameTypes.includes(gameId) && !!dialogGamesHash[gameId];
  // Get game data...
  const game = isValidGame ? dialogGamesHash[gameId] : undefined;
  // Get default screen id
  const screenId = screen ? screen : game?.defaultScreenId;
  React.useEffect(() => {
    if (!gameId) {
      if (!opts?.allowNoGame) {
        return navigate('/');
      }
    }
    /* if (!scenarioId) {
     *   if (!opts?.allowNoScenario) {
     *     return navigate(`/game/${gameId}`);
     *   }
     * }
     */
    if (!screenId) {
      if (!opts?.allowNoScreen) {
        return navigate(`/game/${gameId}`);
      }
    }
  }, [
    gameId,
    // scenarioId,
    screenId,
    navigate,
    opts,
  ]);
  console.log('[useScreenParams]', {
    gameId,
    // scenarioId,
    screenId,
  });
  return {
    gameId,
    // scenarioId,
    screenId,
  } as TScreenParamsResult;
}
