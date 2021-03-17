import React, { useState } from 'react';
import { Paper, Box, Typography } from "@material-ui/core";

import useRenderCounter from "../../../hooks/useRenderCounter";

const ChildComponent = () => {
  const {renderCount}  = useRenderCounter()

  return (
    <p>Render count: {renderCount?.current}</p>
  );
}

const ParentComponent = (props) => {
  const [value, setValue] = useState('');

  return (
    <Paper elevation={2}>
      <Box p={1}>
        <Typography variant="h4">Input with children</Typography>
        <Typography variant='body1'>
          Value: {value}
        </Typography>
        <Box mt={2} mb={1}>
          <input type="text" onChange={(e) => setValue(e.currentTarget.value)}/>
        </Box>
        {props.children}
      </Box>
    </Paper>
  );
}

const InputWithChildren = () => (
  <ParentComponent>
    <ChildComponent />
  </ParentComponent>
);

export default InputWithChildren;
