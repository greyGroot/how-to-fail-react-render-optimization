import React, { useState } from 'react';
import { Box, Typography } from '@material-ui/core';

import { MyBox, ParentPaper } from "../../../shared";
import useRenderCounter from "../../../hooks/useRenderCounter";

const ChildA = ({valueA}) => {
  const {renderCount}  = useRenderCounter()

  return (
    <MyBox color="blue" title="Child A">

      <p>Value: {valueA}</p>
      <p>Render count: {renderCount?.current}</p>

    </MyBox>
  );
}

const ChildB = ({valueB}) => {
  const {renderCount}  = useRenderCounter()

  return (
    <MyBox color="cornflowerblue" title="Child B">

      <p>Value B: {valueB}</p>
      <p>Render count: {renderCount?.current}</p>

    </MyBox>
  );
}

const TwoInputs = () => {
  const [valueA, setValueA] = useState('');
  const [valueB, setValueB] = useState('');

  return (
    <ParentPaper>
      <Typography variant="h4">Two Inputs</Typography>

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

export default TwoInputs;
