import { Stack, Typography } from '@mui/material';
import { FallbackProps } from 'react-error-boundary';
import classNames from 'classnames';

import { TPropsWithClassName } from 'src/core/types';

import styles from './ShowError.module.scss';

export function ShowError({ error, className }: Partial<FallbackProps> & TPropsWithClassName) {
  // Call resetErrorBoundary() to reset the error boundary and retry the render.
  return (
    <Stack className={classNames(className, styles.root)}>
      <Typography variant="h1" fontSize={24} className={styles.errorTitle}>
        Ошибка приложения
      </Typography>
      <Typography className={styles.errorText}>{error.message}</Typography>
    </Stack>
  );
}
