import React from 'react';
import { observer } from 'mobx-react-lite';
import { ThemedLoaderSplash } from 'src/ui/Basic';

// import { useCommonAppNavigation } from 'src/core/hooks/routes/useCommonAppNavigation';

export const WaitingPage: React.FC = observer(() => {
  // useCommonAppNavigation();
  // prettier-ignore
  return (
    <ThemedLoaderSplash />
  );
});
