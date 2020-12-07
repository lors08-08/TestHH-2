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

function PopUp() {
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
      fontSize:"19px !important"
    },
    column: {
      textAlign:"center"
    },
    formControlButton: {
      width: "200px",
      paddingTop: "14px",
    },
    formControl: {
      width: "200px",
    },
    myGridTop: {
      marginTop:"20px !important"
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
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
  const classes = useStyles();

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
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


  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [spot, setSpot] = useState("");
  const [login, setLogin] = useState("");

  return (
    <>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle className={classes.root} id="alert-dialog-title">{"Добавление данных о экспертах по оценке и руководителей"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            <Grid className={classes.column} alignItems="center" direction="columns"  spacing={10}>
              <Grid className={classes.myGrid} item>
                <FormControl className={classes.formControl}>
                  <InputLabel
                    shrink
                    id="demo-simple-select-placeholder-label-label"
                    style={{
                      lineHeight: "1px",
                      color: "rgb(92 94 179)",
                      fontSize: "20px",
                      fontWeight: "bold",
                    }}
                  >
                    ID
                  </InputLabel>
                  <Select
                    disableUnderline
                    labelId="demo-simple-select-placeholder-label-label"
                    id="demo-simple-select-placeholder-label"
                    value={id}
                    onChange={handleId}
                    displayEmpty
                    className={classes.selector}
                  >
                    <MenuItem value="">
                      <em>Введите ID</em>
                    </MenuItem>
                    <MenuItem value={1}>1</MenuItem>
                    <MenuItem value={2}>2</MenuItem>
                    <MenuItem value={3}>3</MenuItem>
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
                      fontSize: "20px",
                      fontWeight: "bold",
                    }}
                  >
                    ID
                  </InputLabel>
                  <Select
                    disableUnderline
                    labelId="demo-simple-select-placeholder-label-label"
                    id="demo-simple-select-placeholder-label"
                    value={id}
                    onChange={handleId}
                    displayEmpty
                    className={classes.selector}
                  >
                    <MenuItem value="">
                      <em>Введите ID</em>
                    </MenuItem>
                    <MenuItem value={1}>1</MenuItem>
                    <MenuItem value={2}>2</MenuItem>
                    <MenuItem value={3}>3</MenuItem>
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
                      fontSize: "20px",
                      fontWeight: "bold",
                    }}
                  >
                    ID
                  </InputLabel>
                  <Select
                    disableUnderline
                    labelId="demo-simple-select-placeholder-label-label"
                    id="demo-simple-select-placeholder-label"
                    value={id}
                    onChange={handleId}
                    displayEmpty
                    className={classes.selector}
                  >
                    <MenuItem value="">
                      <em>Введите ID</em>
                    </MenuItem>
                    <MenuItem value={1}>1</MenuItem>
                    <MenuItem value={2}>2</MenuItem>
                    <MenuItem value={3}>3</MenuItem>
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
                      fontSize: "20px",
                      fontWeight: "bold",
                    }}
                  >
                    ID
                  </InputLabel>
                  <Select
                    disableUnderline
                    labelId="demo-simple-select-placeholder-label-label"
                    id="demo-simple-select-placeholder-label"
                    value={id}
                    onChange={handleId}
                    displayEmpty
                    className={classes.selector}
                  >
                    <MenuItem value="">
                      <em>Введите ID</em>
                    </MenuItem>
                    <MenuItem value={1}>1</MenuItem>
                    <MenuItem value={2}>2</MenuItem>
                    <MenuItem value={3}>3</MenuItem>
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
                      fontSize: "20px",
                      fontWeight: "bold",
                    }}
                  >
                    ID
                  </InputLabel>
                  <Select
                    disableUnderline
                    labelId="demo-simple-select-placeholder-label-label"
                    id="demo-simple-select-placeholder-label"
                    value={id}
                    onChange={handleId}
                    displayEmpty
                    className={classes.selector}
                  >
                    <MenuItem value="">
                      <em>Введите ID</em>
                    </MenuItem>
                    <MenuItem value={1}>1</MenuItem>
                    <MenuItem value={2}>2</MenuItem>
                    <MenuItem value={3}>3</MenuItem>
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
                      fontSize: "20px",
                      fontWeight: "bold",
                    }}
                  >
                    ID
                  </InputLabel>
                  <Select
                    disableUnderline
                    labelId="demo-simple-select-placeholder-label-label"
                    id="demo-simple-select-placeholder-label"
                    value={id}
                    onChange={handleId}
                    displayEmpty
                    className={classes.selector}
                  >
                    <MenuItem value="">
                      <em>Введите ID</em>
                    </MenuItem>
                    <MenuItem value={1}>1</MenuItem>
                    <MenuItem value={2}>2</MenuItem>
                    <MenuItem value={3}>3</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
            </Grid>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button
            className={classes.myButton}
            onClick={handleClose} color="primary" autoFocus variant="contained" color="primary"
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
