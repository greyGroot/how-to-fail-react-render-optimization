import React, { useState } from 'react';
import { Paper, Box, Typography } from '@material-ui/core';

import useRenderCounter from "../../../hooks/useRenderCounter";

const ChildComponent = () => {
  const {renderCount}  = useRenderCounter()

  return (
    <p>Render count: {renderCount?.current}</p>
  );
}

const ControlledInput = () => {
  const [value, setValue] = useState('');

  return (
    <Paper elevation={2}>
      <Box p={1}>
        <Typography variant="h4">Controlled Input</Typography>
        <Typography variant='body1'>
          Value: {value}
        </Typography>
        <Box mt={2} mb={1}>
          <input type="text" onChange={(e) => setValue(e.currentTarget.value)}/>
        </Box>
        <ChildComponent />
      </Box>
    </Paper>
  );
}

export default ControlledInput;
