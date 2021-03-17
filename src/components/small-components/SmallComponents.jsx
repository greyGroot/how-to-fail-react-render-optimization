import React from "react";
import { Grid } from "@material-ui/core"
import BadComposing from "./cases/BadComposing";

const SmallComponents = () => (
  <>
    <Grid container>
      <Grid item>
        <BadComposing />
      </Grid>
    </Grid>
  </>
);

export default SmallComponents;
