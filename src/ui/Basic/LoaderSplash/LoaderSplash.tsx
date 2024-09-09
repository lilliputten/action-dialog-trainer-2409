import React from 'react';
import { observer } from 'mobx-react-lite';
import { CircularProgress } from '@mui/material';
import classNames from 'classnames';

import { useAppSessionStore } from 'src/store';
import { ThemeWrapper } from 'src/core/wrappers/ThemeWrapper';
import { TMuiThemeMode } from 'src/core/types';

import styles from './LoaderSplash.module.scss';

export type TSplashMode = 'cover';

interface TLoaderSplashProps {
  className?: string;
  fullSize?: boolean;
  show?: boolean;
  mode?: TSplashMode;
  themeMode?: TMuiThemeMode;
  bg?: 'videoBlue' | 'videoBg';
}

export function LoaderSplash(props: TLoaderSplashProps): JSX.Element {
  const { className, fullSize, show = true, mode, bg, themeMode } = props;
  const resultedClassName = classNames(
    className,
    styles.container,
    mode && styles['mode_' + mode],
    bg && styles['bg_' + bg],
    fullSize && styles.fullSize,
    show || styles.hidden,
  );
  // @see https://mui.com/material-ui/react-progress/
  return (
    <ThemeWrapper themeMode={themeMode} className={resultedClassName}>
      <CircularProgress className={styles.spinner} />
    </ThemeWrapper>
  );
}

export const ThemedLoaderSplash: React.FC<TLoaderSplashProps> = observer((props) => {
  const appSessionStore = useAppSessionStore();
  const themeMode = props.themeMode || appSessionStore.themeMode;
  return <LoaderSplash {...props} themeMode={themeMode} />;
});
