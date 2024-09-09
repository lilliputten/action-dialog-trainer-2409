import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { observer } from 'mobx-react-lite';
import { Box, ButtonBase, Stack } from '@mui/material';
import classNames from 'classnames';

import { effectTime } from 'src/core/assets/scss';
import { ScreenWrapper } from 'src/components/screens/ScreenWrapper';
import { defaultGameType } from 'src/core/types';

import styles from './GameFinishedPage.module.scss';

export const GameFinishedPage: React.FC = observer(() => {
  const { game = defaultGameType } = useParams();
  const [isStarted, setStarted] = React.useState(false);
  const navigate = useNavigate();
  const handleStart = React.useCallback<React.MouseEventHandler<HTMLButtonElement>>(() => {
    setStarted(true);
    setTimeout(() => {
      navigate(`/game/${game}/start`);
    }, effectTime);
  }, [game, navigate]);
  return (
    <ScreenWrapper className={classNames(styles.root, isStarted && styles.started)}>
      <Stack spacing="8vw" alignItems="center">
        <Box className={classNames(styles.title)}>Игра завершена</Box>
        <ButtonBase className={classNames(styles.button)} onClick={handleStart}>
          Начать заново
        </ButtonBase>
        <Box className={classNames(styles.curtain)}></Box>
      </Stack>
    </ScreenWrapper>
  );
});
