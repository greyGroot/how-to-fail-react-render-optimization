import React, { useContext, useState } from 'react';
import { Paper, Box, Typography } from '@material-ui/core'

import useRenderCounter from "../../../hooks/useRenderCounter";

const SubChildB = () => {
  const { renderCount } = useRenderCounter();
  const [value, setValue] = useState('')

  return (
    <ValueCtx.Consumer unstable_observedBits={observedBitsMap.valueB}>
      {({values: { valueB }, updateValue }) => {
        return (
          <div>
            <p>Sub Child B rendered times: {renderCount.current}</p>
            <p>value B: {valueB}</p>
            <input type="text" onChange={(e) => setValue(e.currentTarget.value)}/>
            <button onClick={() => updateValue('valueB', value)}>Update Value B</button>
          </div>
        );
      }}
    </ValueCtx.Consumer>
  );
}

const SubChildA = () => {
  const { renderCount } = useRenderCounter();
  const [value, setValue] = useState('')

  return (
    <ValueCtx.Consumer unstable_observedBits={observedBitsMap.valueA}>
      {({values: { valueA }, updateValue }) => {
        return (
          <div>
            <p>Sub Child A rendered times: {renderCount.current}</p>
            <p>value A: {valueA}</p>
            <input type="text" onChange={(e) => setValue(e.currentTarget.value)}/>
            <button onClick={() => updateValue('valueA', value)}>Update Value A</button>
          </div>
        );
      }}
    </ValueCtx.Consumer>
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

const UpdateCtxUnstableBits = () => (
  <Paper elevation={2}>
    <Box p={1}>
      <Typography variant='body1'>Update Ctx Unstable Bits</Typography>
      <CtxProvider>
        <Child$ />
      </CtxProvider>
    </Box>
  </Paper>
)

export default UpdateCtxUnstableBits
