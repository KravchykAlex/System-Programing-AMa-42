import React, {useState} from 'react';
import './index.css';
import {AppBar, Tabs, Tab} from '@material-ui/core';
import MergeSort from './components/MergeSort';
import BinarySearch from './components/BinarySearch';
import Fibonacci from './components/Fibonacci';
import EgyptianFraction from './components/EgyptianFraction';
import Queue from './components/Queue';
import { makeStyles } from '@material-ui/core/styles';
import TabPanel from './components/TabPanel';

const useStyles = makeStyles({
  root: {
    fontWeight: 700,
  }
});

const App = () => {
  const [value, setValue] = useState(0);
  const classes = useStyles();

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <div className="container">
      <AppBar position="static">
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="simple tabs example"
          centered
        >
          <Tab classes={{root: classes.root}} label="Merge Sort" />
          <Tab classes={{root: classes.root}} label="Binary Search" />
          <Tab classes={{root: classes.root}} label="Fibonacci" />
          <Tab classes={{root: classes.root}} label="Queue" />
          <Tab classes={{root: classes.root}} label="Egyptian Fraction" />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        <MergeSort />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <BinarySearch />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <Fibonacci />
      </TabPanel>
      <TabPanel value={value} index={3}>
        <Queue />
      </TabPanel>
      <TabPanel value={value} index={4}>
        <EgyptianFraction />
      </TabPanel>
    </div>
  )
};

export default App;