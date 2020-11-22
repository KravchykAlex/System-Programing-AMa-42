import React, { useState } from 'react';
import {TextField, Box, Button, Typography, Paper} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    padding: 15,
    maxWidth: 300,
    marginTop: 15,
  },
  margin: {
    margin: '0 15px'
  },
});

const Queue = () => {
  const [array, setArray] = useState([]);
  const styles = useStyles();

  const getRandomNumber = () => {
    return Math.floor(Math.random() * 101);
  }

  const push = () => {
    const number = getRandomNumber();
    setArray([...array, number]);
  }

  const pop = () => {
    array.pop();
    setArray([...array])
  }

  const peek = () => {
    array.shift();
    setArray([...array])
  }

  return (
    <Box display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <Box>
        <Button onClick={push} variant="contained" color="primary">
          Push
        </Button>
        <Button onClick={pop} classes={{root: styles.margin}} variant="contained" color="primary">
          Pop
        </Button>
        <Button onClick={peek} variant="contained" color="primary">
          Peek
        </Button>
      </Box>
      <Paper classes={{ 
        root: styles.root
      }} elevation={3}>
        <Typography>
          [ {array.map((item, i) => item + (i === array.length - 1 ? '' : ', '))} ]
        </Typography>
      </Paper>
    </Box>
  )
};

export default Queue;