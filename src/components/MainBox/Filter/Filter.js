import React from 'react';
import styles from "./Filter.module.css"
import {Grid} from "@material-ui/core";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import NativeSelect from "@material-ui/core/NativeSelect";
import makeStyles from "@material-ui/core/styles/makeStyles";
import Button from "@material-ui/core/Button";

function Filter(props) {

  const useStyles = makeStyles((theme) => ({
    root: {
      justifyContent:"center",
    },
    formControlButton: {
      width:"200px",
      paddingTop:"14px"
    },
    formControl: {
      width:"200px",
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
    selector: {
      backgroundColor:"white",
      borderRadius:"5px",
      padding:"8px 11px 8px 11px",
      boxShadow:"0 0 20px #bdbdbd",
      fontSize:"10px",
      fontWeight:"600",
      color:"#797979",
    }

  }));
  const classes = useStyles();
  const [state, setState] = React.useState({
    age: '',
    name: 'hai',
  });
  return (
    <div className={styles.box}>
      <Grid className={classes.root} alignItems="center" alignContent="center" container spacing={1}>
        <Grid item md={2} xs={6}>
          <FormControl
            className={classes.formControl}>
            <InputLabel
              style={{
                lineHeight:"1px",
                color:"rgb(92 94 179)",
                fontSize:"20px",
                fontWeight:"bold"
              }}
              htmlFor="uncontrolled-native">ID</InputLabel>
            <NativeSelect

              disableUnderline={true}
              className={classes.selector}
              defaultValue={10}
            >
              <option value={10}>Введите ID</option>
              <option value={20}>Twenty</option>
              <option value={30}>Thirty</option>
            </NativeSelect>
          </FormControl>
        </Grid>
        <Grid item md={2} xs={6}>
          <FormControl
            className={classes.formControl}>
            <InputLabel
              style={{
                lineHeight:"1px",
                color:"rgb(92 94 179)",
                fontSize:"20px",
                fontWeight:"bold"
              }}
              htmlFor="uncontrolled-native">ФИО</InputLabel>
            <NativeSelect
              disableUnderline={true}
              className={classes.selector}
              defaultValue={10}
            >
              <option value={10}>Введите ФИО участника</option>
              <option value={20}>Twenty</option>
              <option value={30}>Thirty</option>
            </NativeSelect>
          </FormControl>
        </Grid>
        <Grid item md={2} xs={6}>
          <FormControl
            className={classes.formControl}>
            <InputLabel
              style={{
                lineHeight:"1px",
                color:"rgb(92 94 179)",
                fontSize:"21px",
                fontWeight:"bold"
              }}
              htmlFor="uncontrolled-native">Должность</InputLabel>
            <NativeSelect
              disableUnderline={true}
              className={classes.selector}
              defaultValue={10}
            >
              <option value={10}>Введите должность участника</option>
              <option value={20}>Twenty</option>
              <option value={30}>Thirty</option>
            </NativeSelect>
          </FormControl>
        </Grid>
        <Grid item md={2} xs={6}>
          <FormControl
            className={classes.formControl}>
            <InputLabel
              style={{
                lineHeight:"1px",
                color:"rgb(92 94 179)",
                fontSize:"21px",
                fontWeight:"bold"
              }}
              htmlFor="uncontrolled-native">Почта(логин)</InputLabel>
            <NativeSelect
              disableUnderline={true}
              className={classes.selector}
              defaultValue={10}
            >
              <option value={10}>Введите ID</option>
              <option value={20}>Twenty</option>
              <option value={30}>Thirty</option>
            </NativeSelect>
          </FormControl>
        </Grid>
        <Grid item md={2} xs={6}>
          <FormControl
            className={classes.formControlButton}>
            <Button variant="contained" color="primary">
              Применить фильтры
            </Button>
          </FormControl>
        </Grid>
      </Grid>
    </div>
  );
}

export default Filter;