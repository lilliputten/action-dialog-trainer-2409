import { AppWrapper } from 'src/core/wrappers/AppWrapper';
import { AppRouterWrapper } from 'src/core/wrappers/AppRouterWrapper';

export function AppRoot() {
  return (
    <AppWrapper>
      <AppRouterWrapper />
    </AppWrapper>
  );
}
