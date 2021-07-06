import React, { useState } from 'react';
import { Box, Typography } from '@material-ui/core';

import { MyBox, ParentPaper } from "../../../shared";
import useRenderCounter from "../../../hooks/useRenderCounter";

const Child = React.memo(({obj, clearValue}) => {
  const { renderCount } = useRenderCounter()

  return (
    <MyBox color="darkgreen" title="Child component">

      <p>{obj.name}: {obj.value}</p>
      <p>Render count: {renderCount?.current}</p>
      <button onClick={clearValue}>Clear {obj.name}</button>

    </MyBox>

  );
})

const BrokenMemo2Inputs = () => {
  const [valueA, setValueA] = useState('');
  const [valueB, setValueB] = useState('');

  return (
    <ParentPaper>
      <Typography variant="h4">Broken Memo Two Inputs</Typography>
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
        obj={{ value: valueA, name: 'valueA'}}
        clearValue={() => setValueA('')}
      />
      <Child
        obj={{ value: valueB, name: 'valueB'}} // {} ? {}
        clearValue={() => setValueB('')} // {} !== {}
      />

    </ParentPaper>
  );
}

export default BrokenMemo2Inputs;
