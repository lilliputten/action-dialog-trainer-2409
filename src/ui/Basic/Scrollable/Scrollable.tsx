import classNames from 'classnames';

// MUI...
import Stack from '@mui/material/Stack';

import styles from './Scrollable.module.scss';

interface TScrollableProps {
  className?: string;
  containerClassName?: string;
  children?: React.ReactNode;
  scrollable?: boolean;
  fullCenter?: boolean;
}

export function Scrollable(props: TScrollableProps): JSX.Element {
  const {
    // prettier-ignore
    className,
    containerClassName,
    children,
    scrollable = true,
    fullCenter = true,
  } = props;
  // prettier-ignore
  return (
    <Stack
      className={classNames(
        className,
        styles.root,
        scrollable ? styles.scrollable : styles.clippable,
        fullCenter && styles.fullCenter,
      )}
      flex={1}
    >
      <Stack className={classNames(containerClassName, styles.container)}>
        {children}
      </Stack>
    </Stack>
  );
}
