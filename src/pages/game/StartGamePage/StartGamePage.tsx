import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { observer } from 'mobx-react-lite';
import { Box, ButtonBase } from '@mui/material';
import classNames from 'classnames';

import { effectTime } from 'src/core/assets/scss';
import { ScreenWrapper } from 'src/components/screens/ScreenWrapper';
import { TGameRouterParams, defaultGameType, gameTypes } from 'src/core/types';
import { gamesHash } from 'src/core/constants/game/games';
import { ShowError } from 'src/components/app/ShowError';

import styles from './StartGamePage.module.scss';

export const StartGamePage: React.FC = observer(() => {
  const { game: gameId = defaultGameType } = useParams<TGameRouterParams>();
  console.log('[StartGamePage]', {
    gameId,
  });
  const error = React.useMemo(() => {
    const isValidGame = !!gameId && gameTypes.includes(gameId) && !!gamesHash[gameId];
    if (!isValidGame) {
      return new Error(`Указана несуществующая игра: ${gameId}`);
    }
  }, [gameId]);
  const [isStarted, setStarted] = React.useState(false);
  const navigate = useNavigate();
  const handleStart = React.useCallback<React.MouseEventHandler<HTMLButtonElement>>(() => {
    setStarted(true);
    setTimeout(() => {
      navigate(`/game/${gameId}/start`);
    }, effectTime);
  }, [gameId, navigate]);
  return (
    <ScreenWrapper className={classNames(styles.root, isStarted && styles.started)}>
      {!!error && <ShowError className={styles.warningText} error={error} />}
      {!error && (
        <ButtonBase className={styles.button} onClick={handleStart}>
          Начать
        </ButtonBase>
      )}
      <Box className={styles.curtain}></Box>
    </ScreenWrapper>
  );
});
