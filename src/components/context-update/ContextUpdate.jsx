import React from 'react';
import {Box, Divider, Grid} from '@material-ui/core'

import UpdateCtx from './cases/UpdateCtx'
import UpdateCtxMemo from './cases/UpdateCtxMemo'
import UpdateCtxChildren from "./cases/UpdateCtxChildren";
import UpdateCtxBits from "./cases/UpdateCtxBits";
import UpdateCtxUnstableBits from "./cases/UpdateCtxUnstableBits";

const ContextUpdate = () => (
  <>
    <Grid container spacing={1}>
      <Grid item>
        <UpdateCtx />
      </Grid>
    </Grid>

    <Box m={2}>
      <Divider />
    </Box>

    <Grid container spacing={1}>
      <Grid item>
        <UpdateCtxMemo />
      </Grid>
      <Grid item>
        <UpdateCtxChildren />
      </Grid>
    </Grid>

    <Box m={2}>
      <Divider />
    </Box>

    <Grid container spacing={1}>
      <Grid item>
        <UpdateCtxBits />
      </Grid>
      <Grid item>
        <UpdateCtxUnstableBits />
      </Grid>
    </Grid>
  </>
)

export default ContextUpdate;
