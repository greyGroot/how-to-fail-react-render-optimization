import React from 'react';
import {Box, Divider, Grid} from '@material-ui/core'

import ControlledInput from "./cases/ControlledInput";
import InputWithChildren from "./cases/InputWithChildren";
import InputWithRef from "./cases/InputWithRef"
import TwoInputs from "./cases/TwoInputs";
import MemoTwoInputs from "./cases/MemoTwoInputs";
import BrokenMemoTwoInputs from "./cases/BrokenMemoTwoInputs";
import FixMemo2Inputs from "./cases/FixMemo2Inputs";

const PropsUpdate = () => (
  <>
    <Grid container spacing={1}>
      <Grid item>
        <ControlledInput />
      </Grid>
      <Grid item>
        <InputWithChildren />
      </Grid>
      <Grid item>
        <InputWithRef />
      </Grid>
    </Grid>

    <Box m={2}>
      <Divider />
    </Box>

    <Grid container spacing={1}>
      <Grid item>
        <TwoInputs />
      </Grid>
      <Grid item>
        <MemoTwoInputs />
      </Grid>
    </Grid>

    <Box m={2}>
      <Divider />
    </Box>

    <Grid container spacing={1}>
      <Grid item>
        <BrokenMemoTwoInputs />
      </Grid>
      <Grid item>
        <FixMemo2Inputs />
      </Grid>
    </Grid>
  </>
);

export default PropsUpdate;
