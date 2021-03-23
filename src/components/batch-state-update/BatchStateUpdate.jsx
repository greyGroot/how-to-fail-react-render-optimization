import React from "react";
import { Grid, Divider, Box } from "@material-ui/core";

import SyncDataUpdate from "./cases/SyncDataUpdate";
import AsyncDataUpdate from "./cases/AsyncDataUpdate";
import BrowserDataUpdate from "./cases/BrowserDataUpdate";
import ReducerDataUpdate from "./cases/ReducerDataUpdate";
import UnstableDataUpdate from "./cases/UnstableDataUpdate";
import SingleDataUpdate from "./cases/SingleDataUpdate";

const BatchStateUpdate = () => {
  return (
    <>
      <Grid container spacing={1}>
        <Grid item>
          <BrowserDataUpdate />
        </Grid>

        <Grid item>
          <AsyncDataUpdate />
        </Grid>

        <Grid item>
          <SyncDataUpdate />
        </Grid>
      </Grid>

      <Box m={2}>
        <Divider />
      </Box>

      <Grid container spacing={1}>
        <Grid item>
          <SingleDataUpdate />
        </Grid>
        <Grid item>
          <ReducerDataUpdate />
        </Grid>
        <Grid item>
          <UnstableDataUpdate />
        </Grid>
      </Grid>
    </>
  );
};

export default BatchStateUpdate;
