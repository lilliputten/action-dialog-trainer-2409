import React from 'react';
import { useParams, useLocation } from 'react-router-dom';
import { Box, IconButton, Stack } from '@mui/material';
import { ErrorBoundary } from 'react-error-boundary';

import { Fullscreen, FullscreenExit, Replay } from '@mui/icons-material';
import classNames from 'classnames';
import { observer } from 'mobx-react-lite';
import screenfull from 'screenfull';

import { TGameRouterParams, TPropsWithChildrenAndClassName, defaultGameType } from 'src/core/types';
import { RouterLinkComponent } from 'src/components/MUI';
import { useAppSessionStore } from 'src/store';
import { LoaderSplash } from 'src/ui/Basic';
import { ShowError } from 'src/components/app/ShowError';

interface TProps extends TPropsWithChildrenAndClassName {
  ref?: React.ForwardedRef<HTMLDivElement>;
  screenType?: string;
  // gameId?: string;
}

export const ScreenWrapper = observer<TProps, HTMLDivElement>(
  React.forwardRef((props, ref) => {
    const appSessionStore = useAppSessionStore();
    const { game: gameId = defaultGameType } = useParams<TGameRouterParams>();
    /* console.log('[ScreenWrapper:DEBUG]', {
     *   gameId,
     * });
     */
    const { fullscreen, ready } = appSessionStore;
    const { children, className } = props;
    const location = useLocation();
    const { pathname } = location;
    const isRoot = !pathname || pathname === '/' || pathname.match(/^\/\w+\/\w+$/);
    const [isFullscreen, setFullscreen] = React.useState(fullscreen);
    React.useEffect(() => {
      if (isFullscreen !== appSessionStore.fullscreen) {
        appSessionStore.setFullscreen(isFullscreen);
        if (isFullscreen) {
          screenfull.request();
        } else {
          screenfull.exit();
        }
      }
    }, [appSessionStore, isFullscreen]);
    const toggleFullscreen = React.useCallback(() => {
      setFullscreen((isFullscreen) => !isFullscreen);
    }, []);
    return (
      <ErrorBoundary fallbackRender={ShowError}>
        <Box className={classNames(className)} ref={ref} data-game-id={gameId}>
          {children}
          {ready && (
            <Stack
              sx={{
                position: 'absolute',
                right: 4,
                bottom: 4,
              }}
              spacing={1}
              direction="row"
            >
              {!isRoot && (
                <IconButton
                  component={RouterLinkComponent}
                  to={`/game/${gameId}`}
                  title="Начать сначала"
                >
                  <Replay />
                </IconButton>
              )}
              <IconButton title="Полноэкранный режим" onClick={toggleFullscreen}>
                {isFullscreen ? <FullscreenExit /> : <Fullscreen />}
              </IconButton>
            </Stack>
          )}
          <LoaderSplash
            // prettier-ignore
            fullSize
            bg="videoBlue"
            themeMode="dark"
            mode="cover"
            show={!ready}
          />
        </Box>
      </ErrorBoundary>
    );
  }),
);
