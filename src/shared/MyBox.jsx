import React  from 'react';
import { Box, Typography } from "@material-ui/core";
import { styled } from '@material-ui/core/styles';

const StyledBox = styled(Box)({
  border: props => `2px solid ${props.color || 'black'}`,
  borderRadius: '10px',
  '& .MuiTypography-root': {
    fontWeight: 'bold',
  }
})

const MyBox = (props) => {
  const { title, ...rest} = props;

  return (
    <StyledBox p={1} mt={1} {...rest}>
      {props.title && (
        <Typography variant='body2'>
          {props.title}
        </Typography>
      )}
      {props.children}
    </StyledBox>
  )
};

export default MyBox;
