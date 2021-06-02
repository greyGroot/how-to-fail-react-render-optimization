import React, { useState } from 'react';
import { Box, Typography } from '@material-ui/core';

import { MyBox, ParentPaper} from "../../../shared";
import useRenderCounter from "../../../hooks/useRenderCounter";

const ChildComponent = () => {
  const {renderCount}  = useRenderCounter()

  return (
    <MyBox color="green" title="Child component">
      <p>Render count: {renderCount?.current}</p>
    </MyBox>
  );
}

const ControlledInput = () => {
  const [value, setValue] = useState('');

  return (
    <ParentPaper>
      <Typography variant="h4">Controlled Input</Typography>
      <Typography variant='body1'>
        Value: {value}
      </Typography>
      <Box mt={2} mb={1}>
        <input
          type='text'
          onChange={(e) => setValue(e.currentTarget.value)}
          value={value}
        />
      </Box>

      <ChildComponent />

    </ParentPaper>
  );
}

export default ControlledInput;
