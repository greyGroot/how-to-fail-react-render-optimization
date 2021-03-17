import React, { useContext, useState } from 'react';
import { Paper, Box } from '@material-ui/core'

import useRenderCounter from "../../../hooks/useRenderCounter";

class Value {
  constructor(valueA, valueB) {
    this.valueA = valueA;
    this.valueB = valueB;
  }

  update(key, value) {
    this[key] = value;
  }
}

const ValueCtx = React.createContext(new Value())

const SubChildA = () => {
  const { renderCount } = useRenderCounter();
  const valueCtx = useContext(ValueCtx)

  const [value, setValue] = useState(valueCtx.valueA)

  const handleClick = () => valueCtx.update('valueA', value)

  return (
    <div>
      <p>Sub Child A rendered times: {renderCount.current}</p>
      <p>value A: {valueCtx.valueA}</p>
      <input type="text" onChange={(e) => setValue(e.currentTarget.value)}/>
      <button onClick={handleClick}>Update Value A</button>
    </div>
  );
}

const ChildA = () => {
  const { renderCount } = useRenderCounter();

  return (
    <div>
      <p>Child A rendered times: {renderCount.current}</p>
      <SubChildA />
    </div>
  );
}

const UpdateCtx = () => {
  return (
    <Paper elevation={2}>
      <Box p={1}>
        <ValueCtx.Provider value={new Value('X', 'Y')}>
          <ChildA />
        </ValueCtx.Provider>
      </Box>
    </Paper>
  );
}

export default UpdateCtx
