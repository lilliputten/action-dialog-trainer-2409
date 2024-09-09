import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';

import { EGameType, EScenarioType, TGameRouterParams } from 'src/core/types';

interface TScreenParamsOptions {
  allowNoGame?: boolean;
  allowNoScreen?: boolean;
  allowNoScenario?: boolean;
}

export interface TScreenParamsResult {
  gameId: EGameType;
  scenarioId: EScenarioType;
  screenNo: number;
}

export function useScreenParams(opts: TScreenParamsOptions | undefined = undefined) {
  // TODO: Use options, eg: allowNoScreen, allowNoScenario
  // Eg page url: /game/first/irina/1
  const navigate = useNavigate();
  const { game: gameId, scenario: scenarioId, screen } = useParams<TGameRouterParams>();
  const screenNo = Number(screen);
  React.useEffect(() => {
    if (!gameId) {
      if (!opts?.allowNoGame) {
        return navigate('/');
      }
    }
    if (!scenarioId) {
      if (!opts?.allowNoScenario) {
        return navigate(`/game/${gameId}`);
      }
    }
    if (!screenNo) {
      if (!opts?.allowNoScreen) {
        return navigate(`/game/${gameId}`);
      }
    }
  }, [gameId, scenarioId, screenNo, navigate, opts]);
  console.log('[useScreenParams]', {
    gameId,
    scenarioId,
    screenNo,
  });
  return { gameId, scenarioId, screenNo };
}
