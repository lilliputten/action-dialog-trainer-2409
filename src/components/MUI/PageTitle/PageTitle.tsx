import { Typography, TypographyOwnProps } from '@mui/material';
import classNames from 'classnames';

import { TPropsWithChildrenAndClassName } from 'src/core/types';

export type TPageTitleProps = TPropsWithChildrenAndClassName & TypographyOwnProps;

export const PageTitle: React.FC<TPageTitleProps> = (props) => {
  const { children, className, ...restProps } = props;
  return (
    <Typography
      className={classNames(className, 'PageTitle')}
      variant="h1"
      fontSize={28}
      {...restProps}
    >
      {children}
    </Typography>
  );
};
