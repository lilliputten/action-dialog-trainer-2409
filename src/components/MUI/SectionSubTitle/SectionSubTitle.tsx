import { Typography, TypographyOwnProps } from '@mui/material';
import classNames from 'classnames';

import { TPropsWithChildrenAndClassName } from 'src/core/types';

export type TSectionSubTitleProps = TPropsWithChildrenAndClassName & TypographyOwnProps;

export const SectionSubTitle: React.FC<TSectionSubTitleProps> = (props) => {
  const { children, className, ...restProps } = props;
  return (
    <Typography
      className={classNames(className, 'SectionSubTitle')}
      variant="h3"
      fontSize={16}
      {...restProps}
      // <DialogTitle variant="h2" fontSize={20} {...restProps}>
    >
      {children}
    </Typography>
  );
};
