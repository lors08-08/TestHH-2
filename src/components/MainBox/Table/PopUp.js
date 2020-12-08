import React, {useState} from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";
import Button from "@material-ui/core/Button";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogActions from "@material-ui/core/DialogActions";
import Dialog from "@material-ui/core/Dialog";
import Grid from "@material-ui/core/Grid";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from '@material-ui/pickers';
import {useDispatch} from "react-redux";
import {addUser} from "../../redux/actions";
import DateFnsUtils from "@date-io/date-fns";

const useStyles = makeStyles((theme) => ({
  myButton: {
    fontSize: "9px",
    padding: "10px 30px 10px 30px",
    width: "200px",
    marginTop:"20px",
    margin:"auto"
  },
  root: {
    color:"#3f51b5",
    fontWeight:"700"
  },
  column: {
    textAlign:"center"
  },
  formControlButton: {
    width: "200px",
    paddingTop: "17px",
  },
  formControl: {
    width: "220px",
    wordBreak:"break-all"
  },
  myGridTop: {
    marginTop:"20px !important"
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
  underline: {
    outline:"none",
    backgroundColor: "white",
    borderRadius: "5px",
    padding: "4px 11px 4px 11px",
    boxShadow: "0 0 20px #bdbdbd",
    fontSize: "9px",
    fontWeight: "600",
    color: "#797979",
    textAlign:"left",
    "&&&:before": {
      borderBottom: "none"
    },
    "&&:after": {
      borderBottom: "none"
    },
    "&&:focus": {
      outline:"none"
    }
  },
  selector: {
    backgroundColor: "white",
    borderRadius: "5px",
    padding: "4px 11px 4px 11px",
    boxShadow: "0 0 20px #bdbdbd",
    fontSize: "9px",
    fontWeight: "600",
    color: "#797979",
    textAlign:"left"
  },
}));

function PopUp() {
  const dispatch = useDispatch()


  const [newUserName, setNewUserName] = useState("");
  const [newUserNum, setNewUserNum] = useState("");

  const [newUserLogin, setNewUserLogin] = useState("");
  const [newUserPass, setNewUserPass] = useState("");

  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [spot, setSpot] = useState("");
  const [login, setLogin] = useState("");

  const [selectedDate, setSelectedDate] = React.useState(new Date('2014-08-18T21:11:54'));

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const handleSetName = (e) => {
    setNewUserName(e.target.value);
  };
  const handleSetNum = (e) => {
    setNewUserNum(e.target.value);
  };

  const handleSetLogin = (e) => {
    setNewUserLogin(e.target.value);
  };
  const handleSetPass = (e) => {
    setNewUserPass(e.target.value);
  };

  const handleAdd = () => {
    setOpen(false);
    dispatch(addUser(newUserName, selectedDate, spot, newUserLogin, newUserPass, newUserNum))
  };
  const handleClose = () => {
    setOpen(false);
  };

  const classes = useStyles();

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleId = (event) => {
    setId(event.target.value);
  };
  const handleName = (event) => {
    setName(event.target.value);
  };
  const handleSpot = (event) => {
    setSpot(event.target.value);
  };
  const handleLogin = (event) => {
    setLogin(event.target.value);
  };

  return (
    <>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle className={classes.root} disableTypography id="alert-dialog-title">{"Добавление данных о экспертах по оценке и руководителей"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            <Grid className={classes.column} container direction="column"  spacing={2}>
              <MuiPickersUtilsProvider utils={DateFnsUtils}>
              <Grid className={classes.myGrid} item>
                <FormControl className={classes.formControl}>
                  <InputLabel
                    shrink
                    id="demo-simple-select-placeholder-label-label"
                    style={{
                      lineHeight: "1px",
                      color: "rgb(92 94 179)",
                      fontSize: "17px",
                      fontWeight: "bold",
                    }}
                  >
                    Дата регистрации
                  </InputLabel>
                  <KeyboardDatePicker
                    InputProps={{ classes }}
                    disableToolbar
                    variant="inline"
                    format="MM/dd/yyyy"
                    margin="normal"
                    id="date-picker-inline"
                    value={selectedDate}
                    onChange={handleDateChange}
                    KeyboardButtonProps={{
                      'aria-label': 'change date',
                    }}
                  />
                </FormControl>
              </Grid>
              </MuiPickersUtilsProvider>
              <Grid className={classes.myGridTop} item>
                <FormControl className={classes.formControl}>
                  <InputLabel
                    shrink
                    id="demo-simple-select-placeholder-label-label"
                    style={{
                      lineHeight: "1px",
                      color: "rgb(92 94 179)",
                      fontSize: "17px",
                      fontWeight: "bold",
                    }}
                  >
                    ФИО
                  </InputLabel>
                  <input
                    onChange={handleSetName}
                    value={newUserName}
                    placeholder="Введите ФИО участника"
                    style={{
                    backgroundColor: "white",
                    borderRadius: "5px",
                    padding: "4px 11px 4px 11px",
                    boxShadow: "0 0 20px #bdbdbd",
                    fontSize: "9px",
                    fontWeight: "600",
                    color: "#797979",
                    textAlign:"left",
                    border:"0px",
                    marginTop:"15px",
                    height:"31px"
                  }} />
                </FormControl>
              </Grid>
              <Grid className={classes.myGridTop} item>
                <FormControl className={classes.formControl}>
                  <InputLabel
                    shrink
                    id="demo-simple-select-placeholder-label-label"
                    style={{
                      lineHeight: "1px",
                      color: "rgb(92 94 179)",
                      fontSize: "17px",
                      fontWeight: "bold",
                    }}
                  >
                    Должность
                  </InputLabel>
                  <Select
                    disableUnderline
                    labelId="demo-simple-select-placeholder-label-label"
                    id="demo-simple-select-placeholder-label"
                    value={spot}
                    onChange={handleSpot}
                    displayEmpty
                    className={classes.selector}
                  >
                    <MenuItem value="">
                      <em>Введите должность участника</em>
                    </MenuItem>
                    <MenuItem value="Внешний Эксперт">Внешний Эксперт</MenuItem>
                    <MenuItem value="HR BP">HR BP</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid className={classes.myGridTop} item>
                <FormControl className={classes.formControl}>
                  <InputLabel
                    shrink
                    id="demo-simple-select-placeholder-label-label"
                    style={{
                      lineHeight: "1px",
                      color: "rgb(92 94 179)",
                      fontSize: "17px",
                      fontWeight: "bold",
                    }}
                  >
                    Почта(логин)
                  </InputLabel>
                  <input
                    onChange={handleSetLogin}
                    value={newUserLogin}
                    placeholder="Введите почту"
                    style={{
                      backgroundColor: "white",
                      borderRadius: "5px",
                      padding: "4px 11px 4px 11px",
                      boxShadow: "0 0 20px #bdbdbd",
                      fontSize: "9px",
                      fontWeight: "600",
                      color: "#797979",
                      textAlign:"left",
                      border:"0px",
                      marginTop:"15px",
                      height:"31px"
                    }} />
                </FormControl>
              </Grid>
              <Grid className={classes.myGridTop} item>
                <FormControl className={classes.formControl}>
                  <InputLabel
                    shrink
                    id="demo-simple-select-placeholder-label-label"
                    style={{
                      lineHeight: "1px",
                      color: "rgb(92 94 179)",
                      fontSize: "17px",
                      fontWeight: "bold",
                    }}
                  >
                    Пароль
                  </InputLabel>
                  <input
                    type="password"
                    onChange={handleSetPass}
                    placeholder="Введите пароль"
                    style={{
                      backgroundColor: "white",
                      borderRadius: "5px",
                      padding: "4px 11px 4px 11px",
                      boxShadow: "0 0 20px #bdbdbd",
                      fontSize: "9px",
                      fontWeight: "600",
                      color: "#797979",
                      textAlign:"left",
                      border:"0px",
                      marginTop:"15px",
                      height:"31px"
                    }} />
                </FormControl>
              </Grid>
              <Grid className={classes.myGridTop} item>
                <FormControl className={classes.formControl}>
                  <InputLabel
                    shrink
                    id="demo-simple-select-placeholder-label-label"
                    style={{
                      lineHeight: "17px",
                      color: "rgb(92 94 179)",
                      fontSize: "17px",
                      fontWeight: "bold",
                      textAlign:"left"
                    }}
                  >
                    Телефон,привязанный к мессенджеру
                  </InputLabel>
                  <input
                    onChange={handleSetNum}
                    value={newUserNum}
                    placeholder="Введите номер телефона"
                    style={{
                      backgroundColor: "white",
                      borderRadius: "5px",
                      padding: "4px 11px 4px 11px",
                      boxShadow: "0 0 20px #bdbdbd",
                      fontSize: "9px",
                      fontWeight: "600",
                      color: "#797979",
                      textAlign:"left",
                      border:"0px",
                      marginTop:"35px",
                      height:"31px"
                    }} />
                </FormControl>
              </Grid>
            </Grid>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button
            className={classes.myButton}
            onClick={handleAdd} color="primary" autoFocus variant="contained" color="primary"
          >
            Применить фильтры
          </Button>
        </DialogActions>
      </Dialog>
      <Button onClick={handleClickOpen} className={classes.myButton} variant="contained" color="primary">
        Добавить пользователя
      </Button>
    </>
  );
}

export default PopUp;
