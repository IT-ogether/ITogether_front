import React, { useState } from 'react';
import { Button } from '@mui/material';
import Tooltip from '@mui/material/Tooltip';

const ToolTip = ({ hideText, titleText }) => {
  return (
    <div>
      <Tooltip
        style={{ fontFamily: 'jua' }}
        disableFocusListener
        disableTouchListener
        title={hideText}
      >
        <Button style={{ fontFamily: 'jua' }}>{titleText}</Button>
      </Tooltip>
    </div>
  );
};

export default ToolTip;
