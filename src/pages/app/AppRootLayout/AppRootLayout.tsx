import { Outlet } from 'react-router-dom';

import { FullGameScreenPageLayout } from 'src/ui/layouts/FullGameScreenPageLayout';

export function AppRootLayout() {
  return (
    <FullGameScreenPageLayout>
      <Outlet />
    </FullGameScreenPageLayout>
  );
}
