import { Typography, TypographyOwnProps } from '@mui/material';
import classNames from 'classnames';

import { TPropsWithChildrenAndClassName } from 'src/core/types';

export type TSectionTitleProps = TPropsWithChildrenAndClassName & TypographyOwnProps;

export const SectionTitle: React.FC<TSectionTitleProps> = (props) => {
  const { children, className, ...restProps } = props;
  return (
    <Typography
      className={classNames(className, 'SectionTitle')}
      variant="h2"
      fontSize={20}
      {...restProps}
      // <DialogTitle variant="h2" fontSize={20} {...restProps}>
    >
      {children}
    </Typography>
  );
};
