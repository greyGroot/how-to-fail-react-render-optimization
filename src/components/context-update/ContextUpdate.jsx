import React from 'react';
import {Box, Grid, Accordion, AccordionSummary, AccordionDetails, Typography} from '@material-ui/core'
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

import UpdateCtx from './cases/UpdateCtx'
import UpdateCtxChildren from "./cases/UpdateCtxChildren";
import UpdateCtxBits from "./cases/UpdateCtxBits";

const ContextUpdate = () => (
  <>
    <Box mb={1}>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
        >
          <Typography variant="h3">Update Context</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Grid container spacing={1} justify='center'>
            <Grid item>
              <UpdateCtx />
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
          <Typography variant="h3">Update Context with a pinch of optimization</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Grid container spacing={1} justify='center'>
            <Grid item>
              {/*<UpdateCtxMemo />*/}
            </Grid>
            <Grid item>
              <UpdateCtxChildren />
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
          <Typography variant="h3">Update Context like a Boss</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Grid container spacing={1} justify='center'>
            <Grid item>
              <UpdateCtxBits />
            </Grid>
            <Grid item>
              {/*<UpdateCtxUnstableBits />*/}
            </Grid>
          </Grid>
        </AccordionDetails>
      </Accordion>
    </Box>


  </>
)

export default ContextUpdate;
