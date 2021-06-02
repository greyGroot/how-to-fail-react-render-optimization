import React, { useContext, useState } from 'react';
import {Paper, Box, Typography, Grid} from '@material-ui/core'

import { MyBox, ParentPaper} from "../../../shared";
import useRenderCounter from "../../../hooks/useRenderCounter";

const SubChildB = () => {
  const { renderCount } = useRenderCounter();
  const {values: {valueB}, updateValue} = useContext(ValueCtx, observedBitsMap.valueB)

  const [value, setValue] = useState(valueB)

  const handleClick = () => updateValue('valueB', value)

  return (
    <MyBox color="gray" title="Sub Child B">
      <p>Sub Child B rendered times: {renderCount.current}</p>
      <p>value B: {valueB}</p>
      <input type="text" onChange={(e) => setValue(e.currentTarget.value)}/>
      <button onClick={handleClick}>Update Value B</button>
    </MyBox>
  );
}

const SubChildA = () => {
  const { renderCount } = useRenderCounter();
  const {values: {valueA}, updateValue} = useContext(ValueCtx, observedBitsMap.valueA)

  const [value, setValue] = useState(valueA)

  const handleClick = () => updateValue('valueA', value)

  return (
    <MyBox color="gray" title="Sub Child A">
      <p>Sub Child A rendered times: {renderCount.current}</p>
      <p>value A: {valueA}</p>
      <input type="text" onChange={(e) => setValue(e.currentTarget.value)}/>
      <button onClick={handleClick}>Update Value A</button>
    </MyBox>
  );
}

const ChildB = () => {
  const { renderCount } = useRenderCounter();

  return (
    <MyBox color="coral" title="Child B">
      <p>rendered times: {renderCount.current}</p>
      <SubChildB />
    </MyBox>
  );
}

const ChildA = () => {
  const { renderCount } = useRenderCounter();

  return (
    <MyBox color="coral" title="Child A">
      <p>rendered times: {renderCount.current}</p>
      <SubChildA />
    </MyBox>
  );
}

const Child0 = () => {
  const { renderCount } = useRenderCounter();

  return (
    <MyBox color="blue" title="Child 0">
      <p>Child 0 rendered times: {renderCount.current}</p>
    </MyBox>
  );
}

const Child$ = () => {
  const { renderCount } = useRenderCounter();

  return (
    <MyBox color="green" title="Child $">
      <p>rendered times: {renderCount.current}</p>
      <Grid container spacing={1}>
        <Grid item>
          <Child0 />
        </Grid>
        <Grid item>
          <ChildA />
        </Grid>
        <Grid item>
          <ChildB />
        </Grid>
      </Grid>
    </MyBox>
  );
}

const observedBitsMap = {
  valueA: 0b01,
  valueB: 0b10,
};

const calculateChangedBits = (currentValues, nextValues) => {
  let result = 0;

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
  <ParentPaper>
    <Typography variant='body1'>Update Ctx Bits</Typography>
    <CtxProvider>
      <Child$ />
    </CtxProvider>
  </ParentPaper>
)

export default UpdateCtxBits
