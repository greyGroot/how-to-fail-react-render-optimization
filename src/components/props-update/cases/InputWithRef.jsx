import React, { useState, useRef } from 'react';
import { Box, Typography, Input, Button } from '@material-ui/core';

import { MyBox, ParentPaper } from "../../../shared";
import useRenderCounter from "../../../hooks/useRenderCounter";

const ChildComponent = () => {
  const {renderCount}  = useRenderCounter()

  return (
    <MyBox color="green" title="Child component">
      <p>Render count: {renderCount?.current}</p>
    </MyBox>
  );
}

const InputWithRef = () => {
  const [value, setValue] = useState('');
  const valueRef = useRef('');

  return (
    <ParentPaper>
      <Typography variant="h4">Input with Ref</Typography>
      <Typography variant='body1'>
        Value: {value}
      </Typography>
      <Box mt={2} mb={1}>
        <input type='text' onChange={(e) => {
          if (valueRef) {
            valueRef.current = e.currentTarget.value
          }
        }}/>
        <button
          onClick={() => {
            setValue(valueRef.current)
          }}
          variant="outlined"
        >
          Submit
        </button>
      </Box>

      <ChildComponent />

    </ParentPaper>
  );
}

export default InputWithRef;
