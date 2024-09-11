import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { observer } from 'mobx-react-lite';
import { Box, ButtonBase, Typography } from '@mui/material';
import classNames from 'classnames';

import { effectTime } from 'src/core/assets/scss';
import { ScreenWrapper } from 'src/components/screens/ScreenWrapper';
import {
  EDialogGameType,
  TGameRouterParams,
  defaultDialogGameType,
  dialogGameNames,
  dialogGameTypes,
} from 'src/core/types';
import { dialogGamesHash } from 'src/core/constants/game';
import { ShowError } from 'src/components/app/ShowError';
import { useGameName } from 'src/core/hooks/game';

import styles from './StartGamePage.module.scss';

const showTitle = false;

export const StartGamePage: React.FC = observer(() => {
  const { game: gameId = defaultDialogGameType } = useParams<TGameRouterParams>();
  console.log('[StartGamePage]', {
    gameId,
  });
  const error = React.useMemo(() => {
    const isValidGame = !!gameId && dialogGameTypes.includes(gameId) && !!dialogGamesHash[gameId];
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
  const name = useGameName(gameId);
  return (
    <ScreenWrapper className={classNames(styles.root, isStarted && styles.started)}>
      {!!error && <ShowError className={styles.warningText} error={error} />}
      {!error && (
        <>
          {showTitle && !!name && (
            <Typography
              className={styles.title}
              variant="h2"
              sx={{
                fontSize: '6vw',
                fontWeight: 500,
              }}
            >
              {name}
            </Typography>
          )}
          <ButtonBase className={styles.button} onClick={handleStart}>
            Начать
          </ButtonBase>
        </>
      )}
      <Box className={styles.curtain}></Box>
    </ScreenWrapper>
  );
});
