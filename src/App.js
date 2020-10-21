import React from 'react';
import logo from './logo.svg';
import './App.css';

import {Button, Typography} from "@material-ui/core"



function App() {
  return (
    <div className="App">
      <Typography color="primary" variant="h1">Hello, there!</Typography>
      <header className="App-header">
        <Button color="primary" variant="contained">Click</Button>
      </header>
    </div>
  );
}

export default App;
