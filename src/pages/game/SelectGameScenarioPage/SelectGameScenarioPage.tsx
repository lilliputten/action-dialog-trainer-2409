'use client';

import React from 'react';
import { ErrorBoundary } from 'react-error-boundary';

import { defaultGameType, gameTypes } from 'src/core/types';
import { useScreenParams } from 'src/core/hooks/routes';

import { SelectGameScenario } from './SelectGameScenario';
import { ShowError } from 'src/components/app/ShowError';
import { gamesHash } from 'src/core/constants/game/games';

function SelectGameScenarioPageWrapper() {
  const { gameId = defaultGameType } = useScreenParams({
    allowNoGame: true,
    allowNoScenario: true,
    allowNoScreen: true,
  });
  const isValidGame = !!gameId && gameTypes.includes(gameId) && !!gamesHash[gameId];
  if (!isValidGame) {
    throw new Error(`Игра '${gameId}' не существует.`);
  }
  return <SelectGameScenario gameId={gameId} />;
}

export function SelectGameScenarioPage() {
  return (
    <ErrorBoundary FallbackComponent={ShowError}>
      <SelectGameScenarioPageWrapper />
    </ErrorBoundary>
  );
}
