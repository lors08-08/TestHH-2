import React from 'react';
import makeStyles from "@material-ui/core/styles/makeStyles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import {filteredUsers} from "../../redux/actions";
import Button from "@material-ui/core/Button";
import PopUp from "./PopUp";

function AddUser() {
  const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      marginTop:"20px",
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      width:"200px",
      color: theme.palette.text.secondary,
    },
    myGrid: {
      width:"fit-content !important"
    },
    myButton: {
      fontSize:"9px",
      padding:"10px 30px 10px 30px",
      width:"200px"
    }

  }));

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid justify="flex-end" container  spacing={2}>
        <Grid className={classes.myGrid} item xs={3}>
          <PopUp />
        </Grid>
      </Grid>
    </div>
  );
}

export default AddUser;