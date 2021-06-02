import React from 'react';
import { Box, Card, CardMedia, CardContent, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";

import MemoPocketImg from '../../static/media/memo_pocket.jpeg'
import RailFailImg from '../../static/media/rail_fail.jpeg'
import ReactMemoImg from '../../static/media/memo_intro.png'
import UseCallbackImg from '../../static/media/useCallback_intro.png'
import UseMemoImg from '../../static/media/useMemo_intro.png'

const useStyles = makeStyles({
  root: {
    marginBottom: '20px',
    maxHeight: '1000px',
    maxWidth: '1000px',
  }
})

const Presentation = () => {
  const classes = useStyles();

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
    >
      <Card raised classes={classes}>
        <CardContent>
          <Typography variant="h2">Hot to Fuck up React.Memoization?</Typography>
        </CardContent>
        <CardMedia
          component="img"
          image={RailFailImg}
          title="Crash on a railroad"
          alt="Crash on a railroad"
        />
      </Card>
      <Card raised classes={classes}>
        <CardContent>
          <Typography variant="h2">What is Memoization?</Typography>
        </CardContent>
        <CardMedia
          component="img"
          image={MemoPocketImg}
          title="Memoization in pocket"
          alt="Memoization in pocket"
        />
      </Card>
      <Card raised classes={classes}>
        <CardContent>
          <Typography variant="h2">React.memo</Typography>
        </CardContent>
        <CardMedia
          component="img"
          image={ReactMemoImg}
          title="React.memo"
          alt="React.memo"
        />
      </Card>
      {/*<Card raised classes={classes}>*/}
      {/*  <CardContent>*/}
      {/*    <Typography variant="h2">React.useMemo</Typography>*/}
      {/*  </CardContent>*/}
      {/*  <CardMedia*/}
      {/*    component="img"*/}
      {/*    image={UseMemoImg}*/}
      {/*    title="React.useMemo"*/}
      {/*    alt="React.useMemo"*/}
      {/*  />*/}
      {/*</Card>*/}
      <Card raised classes={classes}>
        <CardContent>
          <Typography variant="h2">React.useCallback</Typography>
        </CardContent>
        <CardMedia
          component="img"
          image={UseCallbackImg}
          title="React.useCallback<"
          alt="React.useCallback<"
        />
      </Card>
    </Box>
  )
}

export default Presentation;
