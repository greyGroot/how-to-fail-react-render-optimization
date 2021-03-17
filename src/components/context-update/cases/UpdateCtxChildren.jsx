import React, { useContext, useState } from 'react';
import { Paper, Box, Typography } from '@material-ui/core'

import useRenderCounter from "../../../hooks/useRenderCounter";

const ValueCtx = React.createContext({
  valueA: '',
  valueB: '',
  update: (key, value) => {}
})

const SubChildB = () => {
  const { renderCount } = useRenderCounter();
  const {valueB, update} = useContext(ValueCtx)

  const [value, setValue] = useState(valueB)

  const handleClick = () => update('valueB', value)

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
  const {valueA, update} = useContext(ValueCtx)

  const [value, setValue] = useState(valueA)

  const handleClick = () => update('valueA', value)

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

const CtxProvider = (props) => {
  const [values, setValues] = useState({
    valueA: '',
    valueB: '',
  })

  const update = (key, value) =>
    setValues(values => ({
        ...values,
        [key]: value
      })
    )

  const valueCtx = {
    ...values,
    update,
  }

  return (
    <ValueCtx.Provider value={valueCtx}>
      {props.children}
    </ValueCtx.Provider>
  );
}

const UpdateCtxChildren = () => (
  <Paper elevation={2}>
    <Box p={1}>
      <Typography variant='body1'>Update Ctx Children</Typography>
      <CtxProvider>
        <Child$ />
      </CtxProvider>
    </Box>
  </Paper>
)

export default UpdateCtxChildren
