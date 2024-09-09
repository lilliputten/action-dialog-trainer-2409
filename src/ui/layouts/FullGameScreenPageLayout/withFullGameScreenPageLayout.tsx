import React from 'react';

import {
  FullGameScreenPageLayout,
  TFullGameScreenPageLayoutProps,
} from './FullGameScreenPageLayout';

export interface TWithFullGameScreenPageLayoutProps extends JSX.IntrinsicAttributes {
  // title?: string;
}

export function withFullGameScreenPageLayoutFabric<P extends JSX.IntrinsicAttributes>(
  wrapperProps: TFullGameScreenPageLayoutProps = {},
): (
  Component: React.ComponentType<P & TWithFullGameScreenPageLayoutProps>,
) => (props: P & TWithFullGameScreenPageLayoutProps) => JSX.Element {
  return function withFullGameScreenPageLayout<P extends JSX.IntrinsicAttributes>(
    Component: React.ComponentType<P>,
  ) {
    return function FullGameScreenPageLayoutWrapper(props: P & TWithFullGameScreenPageLayoutProps) {
      return (
        <FullGameScreenPageLayout {...wrapperProps}>
          <Component {...props} />
        </FullGameScreenPageLayout>
      );
    };
  };
}
