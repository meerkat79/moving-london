import React, { Component } from 'react';

import './App.css';
import Dashboard from './components/dashboard';
import Grid from '@material-ui/core/Grid';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Grid container spacing={24}>
          <Dashboard />
        </Grid>
      </div>
    );
  }
}

export default App;
