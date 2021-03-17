import React, { useState } from 'react';
import { Paper, Box, Typography } from '@material-ui/core';

import useRenderCounter from "../../../hooks/useRenderCounter";

const ChildA = React.memo(({valueA}) => {
  const {renderCount}  = useRenderCounter()

  return (
    <>
      <p>Value A: {valueA}</p>
      <p>Render count: {renderCount?.current}</p>
    </>

  );
})

const ChildB = React.memo(({valueB}) => {
  const {renderCount}  = useRenderCounter()

  return (
    <>
      <p>Value B: {valueB}</p>
      <p>Render count: {renderCount?.current}</p>
    </>

  );
})

const MemoTwoInputs = () => {
  const [valueA, setValueA] = useState('');
  const [valueB, setValueB] = useState('');

  return (
    <Paper elevation={2}>
      <Box p={1}>
        <Typography variant="h4">Memo Two Inputs</Typography>
        <Box mt={2} mb={1}>
          Input A:
          <input type="text" onChange={(e) => setValueA(e.currentTarget.value)}/>
        </Box>
        <Box mb={1}>
          Input B:
          <input type="text" onChange={(e) => setValueB(e.currentTarget.value)}/>
        </Box>
        <ChildA valueA={valueA} />
        <ChildB valueB={valueB} />
      </Box>
    </Paper>
  );
}

export default MemoTwoInputs;
