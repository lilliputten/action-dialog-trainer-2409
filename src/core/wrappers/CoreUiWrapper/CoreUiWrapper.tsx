import React from 'react';
import { CssBaseline, Typography } from '@mui/material';
import classNames from 'classnames';

import { WithToastsWrapper } from 'src/ui/Basic';
import styles from './CoreUiWrapper.module.scss';

export interface TCoreUiWrapperProps extends JSX.IntrinsicAttributes {
  className?: string;
  children: React.ReactNode;
  // themeMode?: TMuiThemeMode;
}

export function CoreUiWrapper(props: TCoreUiWrapperProps) {
  const { children, className } = props;
  // TODO: `useGlobalCssClasses`?
  return (
    <>
      {/* Theme root for app-through typograpy support */}
      <CssBaseline />
      <Typography className={classNames(className, styles.container)} component="div">
        {/* Toasts support */}
        <WithToastsWrapper>
          {/* Core content */}
          {children}
        </WithToastsWrapper>
      </Typography>
    </>
  );
}
