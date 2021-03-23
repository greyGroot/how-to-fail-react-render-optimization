import React, {useState, useCallback, useRef} from 'react';
import { Paper, Box, Typography } from '@material-ui/core';

import useRenderCounter from "../../../hooks/useRenderCounter";

const Child = React.memo(({name, value, clearValue}) => {
  const { renderCount }  = useRenderCounter()

  return (
    <>
      <p>{name}: {value}</p>
      <p>Render count: {renderCount?.current}</p>
      <button onClick={clearValue}>Clear {name}</button>
    </>

  );
})

const FixMemo2Inputs = () => {
  const [valueA, setValueA] = useState('');
  const [valueB, setValueB] = useState('');

  const clearValueA = useCallback(() => setValueA(''), [])
  const clearValueB = useRef(() => setValueB(''));

  return (
    <Paper elevation={2}>
      <Box p={1}>
        <Typography variant="h4">Fix Memo Two Inputs</Typography>
        <Box mt={2} mb={1}>
          Input A:
          <input type="text" onChange={(e) => setValueA(e.currentTarget.value)}/>
        </Box>
        <Box mb={1}>
          Input B:
          <input type="text" onChange={(e) => setValueB(e.currentTarget.value)}/>
        </Box>
        <Child name='valueA' value={valueA} clearValueA={clearValueA} />
        <Child name='valueB' value={valueB} clearValueB={clearValueB.current} />
      </Box>
    </Paper>
  );
}

export default FixMemo2Inputs;
