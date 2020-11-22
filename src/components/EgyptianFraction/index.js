import React, {useState} from 'react';
import {TextField, Box, Button, Typography, Paper} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    padding: 15,
    maxWidth: 300,
    marginBottom: 10
  },
  margin: {
    marginBottom: 15,
    width: 150
  },
  p: {
    marginTop: 10
  }
});

const EgyptianFraction = () => {
  const [values, setValues] = useState({nr: '', dr: ''});

  const [arr, setArr] = useState([]);
  const styles = useStyles();

  const handleInput = ({target}) => {
    setValues({...values, [target.name]: +target.value})
  };

  const egyptianFraction = ({nr, dr}) => {
    const arr = [];
    const res = [];

    while(nr != 0) {
      let x = Math.ceil(dr / nr) 
      arr.push(x) 
      nr = x * nr - dr 
      dr = dr * x 
  
      for (let i = 0; i < arr.length; i++) {
        if (i == arr.length - 1) {
        res.push(`1/${arr[i]}`)
        } 
      }
    }

    setArr(res)
  } 

  return (
    <Box display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <TextField
        value={values.nr}
        classes={{root: styles.margin}}
        onChange={handleInput}
        name="nr"
        type="number"
        id="outlined-basic"
        label="Numerator"
        variant="outlined"
      />
      <TextField
        value={values.dr}
        classes={{root: styles.margin}}
        onChange={handleInput}
        type="number"
        id="outlined-basic"
        name="dr"
        label="Denominator "
        variant="outlined"
      />
      <Paper classes={{ 
        root: styles.root
      }} elevation={3}>
        <Typography>
          [ {arr.map((item, i) => item + (i === arr.length - 1 ? '' : ', '))} ]
        </Typography>
      </Paper>
      <Button onClick={() => egyptianFraction(values)} variant="contained" color="primary">
        Divide
      </Button>
    </Box>
  )
};

export default EgyptianFraction;