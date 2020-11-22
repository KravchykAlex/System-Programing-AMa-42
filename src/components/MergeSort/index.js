import React, {useState} from 'react';
import {TextField, Box, Button, Typography, Paper} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const merge_sort = function(array){ 
  
  function merge(left, right){
    let result = [];
    let il = 0;
    let ir = 0;

    while (il < left.length && ir < right.length){
      if (left[il] < right[ir]){
        result.push(left[il++]);
      } else {
        result.push(right[ir++]);
      }
    }
 
    return result.concat(left.slice(il)).concat(right.slice(ir));
  }

  function merge_sort(items){
    if (items.length < 2){
      return items;
    } 

    let middle = Math.floor(items.length / 2);
    let left = items.slice(0, middle);
    let right = items.slice(middle);

    return merge(merge_sort(left), merge_sort(right));
  }
  return merge_sort(array);
};

const useStyles = makeStyles({
  root: {
    padding: 15,
    marginRight: 15,
    marginLeft: 45,
    maxWidth: 300
  },
  push: {
    marginLeft: 15
  }
});

const MergeSort = () => {
  const [array, setArray] = useState([12, 11, 13, 5, 6, 7])
  const [inputValue, setInputValue] = useState('');

  const styles = useStyles();
  const handleInput = ({target}) => {
    if (+target.value && target.value.toLowerCase() !== 'e') {
      setInputValue(target.value)
    }
  }
  return (
    <Box display="flex" alignItems="center">
      <TextField
        value={inputValue}
        onChange={handleInput}
        type="number"
        id="outlined-basic"
        label="Number"
        variant="outlined"
      />
      <Button
        onClick={() =>  {
          setArray([...array, +inputValue]);
          setInputValue('');
        }}
        classes={{root: styles.push}}
        variant="contained"
        color="secondary"
      >
        Push
      </Button>
      <Paper classes={{ 
        root: styles.root
      }} elevation={3}>
        <Typography>
          [ {array.map((item, i) => item + (i === array.length - 1 ? '' : ', '))} ]
        </Typography>
      </Paper>
      <Button onClick={() => setArray(merge_sort(array))} variant="contained" color="primary">
        Sort
      </Button>
    </Box>
  );
};

export default MergeSort;