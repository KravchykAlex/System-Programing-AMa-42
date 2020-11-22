import React, {useState} from 'react';
import {TextField, Box, Button, Typography, Paper} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    padding: 15,
    maxWidth: 300
  },
  margin: {
    margin: '15px 0'
  },
  p: {
    marginTop: 10
  }
});

const BinarySearch = () => {
  const [target, setTarget] = useState('');
  const [result, setResult] = useState('');
  const array = [2, 3, 4, 9, 10, 15, 26, 31, 40];
  const styles = useStyles();

  const handleInput = ({target}) => {
    setResult('');
    
    if (+target.value && target.value.toLowerCase() !== 'e') {
      setTarget(+target.value)
    }
  }

  const binarySearch = (array, target) => {
    let startIndex = 0;
    let endIndex = array.length - 1;

    while(startIndex <= endIndex) {
      let middleIndex = Math.floor((startIndex + endIndex) / 2);
      if(target === array[middleIndex]) {
        setResult("Target was found at index " + middleIndex);
        return ;
      }
      if(target > array[middleIndex]) {
        startIndex = middleIndex + 1;
      }
      if(target < array[middleIndex]) {
        endIndex = middleIndex - 1;
      }
    }
    
    setResult("Target value not found in array");
  }
  
  return (
    <Box display="flex" flexDirection="column" alignItems="center">
      <Paper classes={{ 
        root: styles.root
      }} elevation={3}>
        <Typography>
          [ {array.map((item, i) => item + (i === array.length - 1 ? '' : ', '))} ]
        </Typography>
      </Paper>
      <TextField
        value={target}
        classes={{root: styles.margin}}
        onChange={handleInput}
        type="number"
        id="outlined-basic"
        label="Number"
        variant="outlined"
      />
      <Button onClick={() => binarySearch(array, target)} variant="contained" color="primary">
        Find
      </Button>
    <Typography classes={{root: styles.p}}>{result}</Typography>
    </Box>
  )
};

export default BinarySearch;