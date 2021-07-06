import React from 'react';
import {Box, Grid, Accordion, AccordionSummary, AccordionDetails, Typography} from '@material-ui/core'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import ControlledInput from "./cases/ControlledInput";
import InputWithChildren from "./cases/InputWithChildren";
import TwoInputs from "./cases/TwoInputs";
import MemoTwoInputs from "./cases/MemoTwoInputs";
import BrokenMemo2Inputs from "./cases/BrokenMemo2Inputs";
import FixMemo2Inputs from "./cases/FixMemo2Inputs";

const PropsUpdate = () => (
  <>
    <Box mb={1}>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
        >
          <Typography variant="h3">No need for Memo</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Grid container spacing={1} justify='center'>
            <Grid item>
              <ControlledInput />
            </Grid>
            <Grid item>
              <InputWithChildren />
            </Grid>
          </Grid>
        </AccordionDetails>
      </Accordion>
    </Box>
    <Box mb={1}>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography variant="h3">I got need for Memo</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Grid container spacing={1} justify='center'>
            <Grid item>
              <TwoInputs />
            </Grid>
            <Grid item>
              <MemoTwoInputs />
            </Grid>
          </Grid>
        </AccordionDetails>
      </Accordion>
    </Box>

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
        >
          <Typography variant="h3">Just Memo it!</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Grid container spacing={1} justify='center'>
            <Grid item>
              <BrokenMemo2Inputs />
            </Grid>
            <Grid item>
              <FixMemo2Inputs />
            </Grid>
          </Grid>
        </AccordionDetails>
      </Accordion>
  </>
);

export default PropsUpdate;
