import React, { useEffect, useReducer } from "react";
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

const setUpdateState = ( updateState ) => ({
  type: 'SET_UPDATE_STATE',
  payload: {
    updateState,
  }
})

const setData = ({
                   firstNum,
                   secondNum,
                   thirdNum,
                   updateState,
                 }) => ({
  type: 'SET_DATA',
  payload: {
    firstNum,
    secondNum,
    thirdNum,
    updateState,
  }
})

const clearState = () => ({
  type: 'CLEAR_STATE'
})

const initialState = {
  firstNum: null,
  secondNum: null,
  thirdNum: null,
  updateState: false,
}

function reducer(state, action) {
  switch (action.type) {
    case 'SET_UPDATE_STATE':
      return {
        ...state,
        ...action.payload,
      };
    case 'SET_DATA':
      return {
        ...state,
        ...action.payload,
      };
    case 'CLEAR_STATE':
      return initialState;
    default:
      throw new Error('Some error');
  }
}

const ReducerDataUpdate = () => {
  const [{
    firstNum,
    secondNum,
    thirdNum,
    updateState,
  }, dispatch] = useReducer(reducer, initialState);

  const { renderCount, clearCounter } = useRenderCount([
    firstNum,
    secondNum,
    thirdNum,
  ]);

  useEffect(() => {
    if (updateState) {
      setTimeout(() => {
        dispatch(setData({
          firstNum: getRandomNumber(1),
          secondNum: getRandomNumber(2),
          thirdNum: getRandomNumber(3),
          updateState: false,
        }))
      }, 0);
    }
  }, [updateState]);

  const handleClick = () => {
    dispatch(setUpdateState(true));
  };

  const handleClear = () => {
    dispatch(clearState())
    clearCounter();
  };

  return (
    <Paper elevation={2}>
      <Box p={1}>
        <Typography variant="h4">Reducer Data Update</Typography>

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

export default ReducerDataUpdate;
