import * as React from 'react';
import { Link as RouterLinkComponent, To } from 'react-router-dom';
import Link, { LinkOwnProps } from '@mui/material/Link';

export interface TRouterLinkProps extends LinkOwnProps {
  to: To;
  // sx?: LinkOwnProps['sx'];
}

/* // UNUSED
 * export class RouterLinkClass extends React.Component<TRouterLinkProps> {
 *   render() {
 *     const { children, ...restProps } = this.props;
 *     return (
 *       <Link component={RouterLinkComponent} {...restProps}>
 *         {children}
 *       </Link>
 *     );
 *   }
 * }
 */

export { RouterLinkComponent };

export const RouterLink: React.FC<TRouterLinkProps> = (props) => {
  const { children, ...restProps } = props;
  return (
    <Link component={RouterLinkComponent} {...restProps}>
      {children}
    </Link>
  );
};
