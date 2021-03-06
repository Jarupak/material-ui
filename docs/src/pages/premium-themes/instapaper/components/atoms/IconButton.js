import React from 'react';
import cx from 'classnames';
import MuiIconButton from '@material-ui/core/IconButton';
import { ICON_BUTTON } from '../../theme/core';

const IconButton = ({ className, shaded, noPad, narrowPad, separated, linkInverted, ...props }) => (
  <MuiIconButton
    className={cx(
      ICON_BUTTON.root,
      className,
      shaded && ICON_BUTTON.shaded,
      noPad && ICON_BUTTON.noPad,
      narrowPad && ICON_BUTTON.narrowPad,
      separated && ICON_BUTTON.separated,
      linkInverted && ICON_BUTTON.linkInverted,
    )}
    {...props}
  />
);

export default IconButton;
