import * as React from 'react';
import { observer } from 'mobx-react-lite';
import { Box } from '@mui/material';
import classNames from 'classnames';

import { ThemeWrapper } from 'src/core/wrappers/ThemeWrapper';
// import { AppHeader } from 'src/components/App/AppHeader';
// import { AppFooter } from 'src/components/App/AppFooter';
import { useAppSessionStore } from 'src/store';
// import { HelpModal } from 'src/components/Help/HelpModal';
import { Scrollable } from 'src/ui/Basic';

import styles from './FullGameScreenPageLayout.module.scss';

export interface TFullGameScreenPageLayoutProps {
  className?: string;
  children?: React.ReactNode;
  scrollable?: boolean;
}

export const FullGameScreenPageLayout: React.FC<TFullGameScreenPageLayoutProps> = observer(
  (props): JSX.Element => {
    // NOTE: Get props from nextjs (as `pageProps`)
    const { className, children, scrollable } = props;
    const appSessionStore = useAppSessionStore();
    const { themeMode } = appSessionStore;
    /* // DEBUG: router location
     * const location = useLocation();
     * const { pathname } = location;
     * React.useEffect(() => {
     *   console.log('[FullGameScreenPageLayout:Effect:pathname]', pathname, {
     *     location,
     *   });
     * }, [pathname, location]);
     */
    const content = React.useMemo(() => {
      if (scrollable) {
        return (
          <Scrollable
            className={classNames(styles.scrollableContent)}
            containerClassName={styles.scrollableContainer}
          >
            {/* Scrollable content */}
            {children}
          </Scrollable>
        );
      }
      /*
       * return (
       *   <Box className={styles.content}>
       *     {[> Normal content <]}
       *     {children}
       *   </Box>
       * );
       */
      return children;
    }, [children, scrollable]);
    return (
      <ThemeWrapper className={classNames(className, styles.root)} themeMode={themeMode} fullSize>
        {/* <AppHeader className={styles.header} /> */}
        <Box className={styles.content}>
          {/* Main content */}
          {content}
        </Box>
        {/* <AppFooter className={styles.footer} /> */}
        {/* <HelpModal /> */}
      </ThemeWrapper>
    );
  },
);
