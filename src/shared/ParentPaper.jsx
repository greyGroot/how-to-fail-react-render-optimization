import React from 'react';
import { Paper, Typography } from "@material-ui/core"
import { styled } from '@material-ui/core/styles';

const StyledPaper = styled(Paper)({
  border: '4px solid red',
  padding: '8px',
  '& .MuiTypography-root': {
    fontWeight: 'bold',
  }
})

const ParentPaper = (props) => (
  <StyledPaper elevation={2}>
    <Typography variant="body2" color="secondary">
      Parent component
    </Typography>
    {props.children}
  </StyledPaper>
)

export default ParentPaper;
