import React, { useState } from 'react';
import { Box, Typography } from '@material-ui/core';

import { MyBox, ParentPaper } from "../../../shared";
import useRenderCounter from "../../../hooks/useRenderCounter";

const ChildA = React.memo(({valueA}) => {
  const {renderCount}  = useRenderCounter()

  return (
    <MyBox color='blue' title="Child A">
      <p>Value A: {valueA}</p>
      <p>Render count: {renderCount?.current}</p>
    </MyBox>
  );
})

const ChildB = React.memo(({valueB}) => {
  const {renderCount}  = useRenderCounter()

  return (
    <MyBox color='cornflowerblue' title="Child B">
      <p>Value B: {valueB}</p>
      <p>Render count: {renderCount?.current}</p>
    </MyBox>
  );
})

const MemoTwoInputs = () => {
  const [valueA, setValueA] = useState('');
  const [valueB, setValueB] = useState('');

  return (
    <ParentPaper>
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

    </ParentPaper>
  );
}

export default MemoTwoInputs;
