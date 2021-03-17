import React, { useState, useRef, useEffect } from 'react';
import { Paper, Box, Typography } from '@material-ui/core';

import useRenderCounter from "../../../hooks/useRenderCounter";

const ChildComponent = () => {
  const {renderCount}  = useRenderCounter()

  return (
    <p>Render count: {renderCount?.current}</p>
  );
}

const InputWithRef = () => {
  const [value, setValue] = useState('');
  const valueRef = useRef('');

  useEffect(() => {
    if (valueRef && valueRef.current) {
      console.log(valueRef.current)
    }
  }, [valueRef.current])

  return (
    <Paper elevation={2}>
      <Box p={1}>
        <Typography variant="h4">Input with Ref</Typography>
        <Typography variant='body1'>
          Value: {value}
        </Typography>
        <Box mt={2} mb={1}>
          <input type="text" onChange={(e) => {
            if (valueRef) {
              valueRef.current = e.currentTarget.value
            }
          }}/>
          <button onClick={() => {
            setValue(valueRef.current)
          }}>Submit</button>
        </Box>
        <ChildComponent />
      </Box>
    </Paper>
  );
}

export default InputWithRef;
