import React, { useState, useEffect, useCallback } from "react";
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

const BrowserDataUpdate = () => {
  const [firstNum, setFirstNum] = useState(null);
  const [secondNum, setSecondNum] = useState(null);
  const [thirdNum, setThirdNum] = useState(null);

  const { renderCount, clearCounter } = useRenderCount([
    firstNum,
    secondNum,
    thirdNum,
  ]);

  const keydownHandler = useCallback((event) => {
    event.preventDefault();

    if (event.key === "Enter") {
      setFirstNum(getRandomNumber(1));
      setSecondNum(getRandomNumber(2));
      setThirdNum(getRandomNumber(3));
    }
  }, []);

  useEffect(() => {
    document.addEventListener("keydown", keydownHandler, false);

    return () => {
      document.removeEventListener("keydown", keydownHandler, false);
    };
  }, [keydownHandler]);

  const handleClear = () => {
    setFirstNum(null);
    setSecondNum(null);
    setThirdNum(null);
    clearCounter();
  };

  return (
    <Paper elevation={2}>
      <Box p={1}>
        <Typography variant="h4">Browser Data Update</Typography>

        <Box mt={3}>
          <List>
            <ListItem>First Number: {firstNum}</ListItem>
            <ListItem>Second Number: {secondNum}</ListItem>
            <ListItem>Third Number: {thirdNum}</ListItem>
          </List>
        </Box>

        <Box mt={2}>
          <Typography>Component was rendered {renderCount} times</Typography>
          <Button variant="contained" disabled>
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

export default BrowserDataUpdate;
