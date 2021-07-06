import React, { useState } from 'react';
import { Box, Typography, Input } from "@material-ui/core";

import { MyBox, ParentPaper} from "../../../shared";
import useRenderCounter from "../../../hooks/useRenderCounter";

const ChildComponent = () => {
  const {renderCount}  = useRenderCounter()

  return (
    <MyBox color="green" title="Child component">

      <p>Render count: {renderCount?.current}</p>

    </MyBox>
  );
}

const ParentComponent = (props) => {
  const [value, setValue] = useState('');

  return (
    <ParentPaper>
      <Typography variant="h4">Input with children</Typography>

      <Typography variant='body1'>
        Value: {value}
      </Typography>
      <Box mt={2} mb={1}>
        <input type='text' onChange={(e) => setValue(e.currentTarget.value)}/>
      </Box>

      {props.children}

    </ParentPaper>
  );
}

const InputWithChildren = () => (
  <ParentComponent>

    <ChildComponent />

  </ParentComponent>
);

export default InputWithChildren;
