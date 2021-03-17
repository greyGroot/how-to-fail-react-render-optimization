import React, { useContext, useState } from 'react';
import { Paper, Box, Typography } from '@material-ui/core'

import useRenderCounter from "../../../hooks/useRenderCounter";

const SubChildB = () => {
  const { renderCount } = useRenderCounter();
  const {values: {valueB}, updateValue} = useContext(ValueCtx, observedBitsMap.valueB)

  const [value, setValue] = useState(valueB)

  const handleClick = () => updateValue('valueB', value)

  return (
    <div>
      <p>Sub Child B rendered times: {renderCount.current}</p>
      <p>value B: {valueB}</p>
      <input type="text" onChange={(e) => setValue(e.currentTarget.value)}/>
      <button onClick={handleClick}>Update Value B</button>
    </div>
  );
}

const SubChildA = () => {
  const { renderCount } = useRenderCounter();
  const {values: {valueA}, updateValue} = useContext(ValueCtx, observedBitsMap.valueA)

  const [value, setValue] = useState(valueA)

  const handleClick = () => updateValue('valueA', value)

  return (
    <div>
      <p>Sub Child A rendered times: {renderCount.current}</p>
      <p>value A: {valueA}</p>
      <input type="text" onChange={(e) => setValue(e.currentTarget.value)}/>
      <button onClick={handleClick}>Update Value A</button>
    </div>
  );
}

const ChildB = () => {
  const { renderCount } = useRenderCounter();

  return (
    <div>
      <p>Child B rendered times: {renderCount.current}</p>
      <SubChildB />
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

const Child0 = () => {
  const { renderCount } = useRenderCounter();

  return (
    <div>
      <p>Child 0 rendered times: {renderCount.current}</p>
    </div>
  );
}

const Child$ = () => {
  const { renderCount } = useRenderCounter();

  return (
    <div>
      <p>Child$ rendered times: {renderCount.current}</p>
      <Child0 />
      <ChildA />
      <ChildB />
    </div>
  );
}

const observedBitsMap = {
  valueA: 0b01,
  valueB: 0b10,
};

const calculateChangedBits = (currentValues, nextValues) => {
  let result = 0;

  console.log('calculateChangedBits', currentValues, nextValues);

  Object.entries(nextValues.values).forEach(([key, value]) => {
    if (value !== currentValues.values[key]) {
      result = result | observedBitsMap[key];
    }
  });

  return result;
};

const initialCtx = {
  values: {
    valueA: '',
    valueB: '',
  }
}

const ValueCtx = React.createContext(initialCtx, calculateChangedBits)

const CtxProvider = (props) => {
  const ctx = useContext(ValueCtx)
  const [values, setValues] = useState(ctx.values)

  const updateValue = (key, value) =>
    setValues(values => ({
        ...values,
        [key]: value
      })
    )

  return (
    <ValueCtx.Provider value={{ values, updateValue}}>
      {props.children}
    </ValueCtx.Provider>
  );
}

const UpdateCtxBits = () => (
  <Paper elevation={2}>
    <Box p={1}>
      <Typography variant='body1'>Update Ctx Bits</Typography>
      <CtxProvider>
        <Child$ />
      </CtxProvider>
    </Box>
  </Paper>
)

export default UpdateCtxBits
