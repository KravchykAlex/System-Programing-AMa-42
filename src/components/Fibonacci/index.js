import React, {useState} from 'react';
import {TextField, Box, Button, Typography, Paper} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  margin: {
    margin: '15px 0'
  },
});

const Fibonacci = () => {
  const [result, setResult] = useState(null);
  const [target, setTarget] = useState('');
  const classes = useStyles();

  const handleInput = ({target}) => {
    setResult(null);
    
    if (+target.value && target.value.toLowerCase() !== 'e') {
      setTarget(+target.value)
    }
  }

  const fibonacci = (n) => {
    return n <= 1 ? n : fibonacci(n - 1) + fibonacci(n - 2);
  }
  
  return (
    <Box display="flex" flexDirection="column" alignItems="center">
      <TextField
        value={target}
        onChange={handleInput}
        type="number"
        id="outlined-basic"
        label="Number"
        variant="outlined"
      />
      <Button classes={{root: classes.margin}} onClick={() => setResult(fibonacci(target))} variant="contained" color="primary">
        Find
      </Button>
      {result && <Typography>Result: {result}</Typography>}
    </Box>
  )
};

export default Fibonacci;