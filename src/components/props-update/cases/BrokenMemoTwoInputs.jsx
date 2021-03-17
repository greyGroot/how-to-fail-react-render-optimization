import React, { useState } from 'react';
import { Paper, Box, Typography, Grid } from '@material-ui/core';

import useRenderCounter from "../../../hooks/useRenderCounter";

const Child = React.memo(({obj, clearValue}) => {
  const { renderCount }  = useRenderCounter()

  return (
    <>
      <p>{obj.name}: {obj.value}</p>
      <p>Render count: {renderCount?.current}</p>
      <button onClick={clearValue}>Clear {obj.name}</button>
    </>

  );
})

const BrokenMemoTwoInputs = () => {
  const [valueA, setValueA] = useState('');
  const [valueB, setValueB] = useState('');

  return (
    <Paper elevation={2}>
      <Box p={1}>
        <Typography variant="h4">Broken Memo Two Inputs</Typography>
        <Box mt={2} mb={1}>
          Input A:
          <input type="text" onChange={(e) => setValueA(e.currentTarget.value)}/>
        </Box>
        <Box mb={1}>
          Input B:
          <input type="text" onChange={(e) => setValueB(e.currentTarget.value)}/>
        </Box>
        <Child obj={{ value: valueA, name: 'valueA'}} clearValueA={() => setValueA('')} />
        <Child obj={{ value: valueB, name: 'valueB'}} clearValueB={() => setValueB('')} />
      </Box>
    </Paper>
  );
}

export default BrokenMemoTwoInputs;
