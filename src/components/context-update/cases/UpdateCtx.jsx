import React, { useContext, useState } from 'react';
import { Grid, Typography } from '@material-ui/core'

import { MyBox, ParentPaper} from "../../../shared";
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
    <MyBox color="gray" title="Sub Child B">

      <p>rendered times: {renderCount.current}</p>
      <p>value B: {valueB}</p>
      <input type="text" onChange={(e) => setValue(e.currentTarget.value)}/>
      <button onClick={handleClick}>Update Value B</button>

    </MyBox>
  );
}

const SubChildA = () => {
  const { renderCount } = useRenderCounter();
  const {valueA, update} = useContext(ValueCtx)

  const [value, setValue] = useState(valueA)

  const handleClick = () => update('valueA', value)

  return (
    <MyBox color="gray" title="Sub Child A">

      <p>rendered times: {renderCount.current}</p>
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

const UpdateCtx = () => {
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
    <ParentPaper>
      <Typography variant='body1'>Update Ctx</Typography>

      <ValueCtx.Provider value={valueCtx}>
        <Child$ />
      </ValueCtx.Provider>

    </ParentPaper>
  );
}

export default UpdateCtx
