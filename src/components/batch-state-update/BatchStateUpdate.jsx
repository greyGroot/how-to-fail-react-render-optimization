import React from "react";
import {Grid, Box, Accordion, AccordionSummary, Typography, AccordionDetails} from "@material-ui/core";

import AsyncDataUpdate from "./cases/AsyncDataUpdate";
import BrowserDataUpdate from "./cases/BrowserDataUpdate";
import UnstableDataUpdate from "./cases/UnstableDataUpdate";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

const BatchStateUpdate = () => {
  return (
    <>
      <Box mb={1}>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
          >
            <Typography variant="h3">How many renders?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Grid container spacing={1} justify="center">
              <Grid item>
                <BrowserDataUpdate />
              </Grid>

              <Grid item>
                <AsyncDataUpdate />
              </Grid>
            </Grid>
          </AccordionDetails>
        </Accordion>
      </Box>

      <Box mb={1}>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
          >
            <Typography variant="h3">Lets try one more time</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Grid container spacing={1}>
              <Grid item>
                <UnstableDataUpdate />
              </Grid>
            </Grid>
          </AccordionDetails>
        </Accordion>
      </Box>
    </>
  );
};

export default BatchStateUpdate;
