import React, { useState } from 'react';
import { Button } from '@mui/material';
import Tooltip from '@mui/material/Tooltip';

const ToolTip = ({ hideText, titleText }) => {
  return (
    <Tooltip disableFocusListener disableTouchListener title={hideText}>
      <Button>{titleText}</Button>
    </Tooltip>
  );
};

export default ToolTip;
