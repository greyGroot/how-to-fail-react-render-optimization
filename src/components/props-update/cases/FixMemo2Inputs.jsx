import React, {useState, useCallback, useRef} from 'react';
import { Box, Typography } from '@material-ui/core';

import { MyBox, ParentPaper } from "../../../shared";
import useRenderCounter from "../../../hooks/useRenderCounter";

const Child = React.memo(({name, value, clearValue}) => {
  const { renderCount }  = useRenderCounter()

  return (
    <MyBox color="darkgreen" title="Child component">

      <p>{name}: {value}</p>
      <p>Render count: {renderCount?.current}</p>
      <button onClick={clearValue}>Clear {name}</button>

    </MyBox>

  );
})

const FixMemo2Inputs = () => {
  const [valueA, setValueA] = useState('');
  const [valueB, setValueB] = useState('');

  const clearValueA = useCallback(() => setValueA(''), [])
  const clearValueB = useRef(() => setValueB(''));

  return (
    <ParentPaper>
      <Typography variant="h4">Fix Memo Two Inputs</Typography>
      <Box mt={2} mb={1}>

        Input A:
        <input
          type="text"
          onChange={(e) => setValueA(e.currentTarget.value)}
          value={valueA}
        />

      </Box>
      <Box mb={1}>

        Input B:
        <input
          type="text"
          onChange={(e) => setValueB(e.currentTarget.value)}
          value={valueB}
        />

      </Box>

      <Child
        name='valueA'
        value={valueA}
        clearValue={clearValueA}
      />
      <Child name='valueB' value={valueB} clearValue={clearValueB.current} />

    </ParentPaper>
  );
}

export default FixMemo2Inputs;
