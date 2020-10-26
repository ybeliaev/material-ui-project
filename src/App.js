import React from 'react';

import './App.css';

import {Button, Typography} from "@material-ui/core"
import {makeStyles} from "@material-ui/core/styles"
import SaveIcon from "@material-ui/icons/Save"
import DeleteIcon from "@material-ui/icons/Delete"

const useStyles = makeStyles({
  root:{
    fontStyle: "oblique"
  },
  btn:{
    borderRadius: 15,
    color: 'tomato',
    padding: '10px 30px',
    marginTop: '10px'
  }
})


function BtnStyled(){
  const classes = useStyles();
  return <Button className={classes.btn} >Styled Button</Button>
}

function App() {
  const classes = useStyles()
  
  return (
    <div className="App">
      <Typography className={classes.root} color="primary" variant="h1">Hello, there!</Typography>
      <header className="App-header">
        <Button
          
          color="primary"
          variant="contained"
          startIcon={<SaveIcon/>}
          >Click</Button>
        <BtnStyled/>
      </header>
    </div>
  );
}

export default App;
