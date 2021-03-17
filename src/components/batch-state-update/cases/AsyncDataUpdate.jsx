import React, { useState, useEffect } from "react";
import {
  Typography,
  List,
  ListItem,
  Button,
  Box,
  Paper,
} from "@material-ui/core";

import { getRandomNumber } from "../utils";
import useRenderCount from "../../../hooks/useRenderCount";

const AsyncDataUpdate = () => {
  const [firstNum, setFirstNum] = useState(null);
  const [secondNum, setSecondNum] = useState(null);
  const [thirdNum, setThirdNum] = useState(null);
  const [updateState, setUpdateState] = useState(false);

  const { renderCount, clearCounter } = useRenderCount([
    firstNum,
    secondNum,
    thirdNum,
  ]);

  useEffect(() => {
    if (updateState) {
      setTimeout(() => {
        setFirstNum(getRandomNumber(1));
        setSecondNum(getRandomNumber(2));
        setThirdNum(getRandomNumber(3));

        setUpdateState(false);
      }, 0);
    }
  }, [updateState]);

  const handleClick = () => {
    setUpdateState(true);
  };

  const handleClear = () => {
    setFirstNum(null);
    setSecondNum(null);
    setThirdNum(null);
    clearCounter();
  };

  return (
    <Paper elevation={2}>
      <Box p={1}>
        <Typography variant="h4">Async Data Update</Typography>

        <Box mt={3}>
          <List>
            <ListItem>First Number: {firstNum}</ListItem>
            <ListItem>Second Number: {secondNum}</ListItem>
            <ListItem>Third Number: {thirdNum}</ListItem>
          </List>
        </Box>

        <Box mt={2}>
          <Typography>Component was rendered {renderCount} times</Typography>
          <Button variant="contained" onClick={handleClick}>
            Update state
          </Button>
          <Button variant="contained" onClick={handleClear}>
            Clear
          </Button>
        </Box>
      </Box>
    </Paper>
  );
};

export default AsyncDataUpdate;
