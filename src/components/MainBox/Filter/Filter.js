import React, { useState } from "react";
import styles from "./Filter.module.css";
import { Grid } from "@material-ui/core";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import makeStyles from "@material-ui/core/styles/makeStyles";
import Button from "@material-ui/core/Button";
import { useDispatch, useSelector } from "react-redux";
import { filteredUsers } from "../../redux/actions";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";

function Filter(props) {
  const useStyles = makeStyles((theme) => ({
    root: {
      justifyContent: "center",
    },
    formControlButton: {
      width: "200px",
      paddingTop: "14px",
    },
    formControl: {
      width: "200px",
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
    selector: {
      backgroundColor: "white",
      borderRadius: "5px",
      padding: "8px 11px 8px 11px",
      boxShadow: "0 0 20px #bdbdbd",
      fontSize: "9px",
      fontWeight: "600",
      color: "#797979",
    },
    myButton: {
      fontSize:"9px",
      padding:"10px 40px 10px 40px",
      width:"200px"
    }
  }));

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

  const classes = useStyles();

  const dispatch = useDispatch();
  const users = useSelector((state) => state.listing.users);

  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [spot, setSpot] = useState("");
  const [login, setLogin] = useState("");

  const filteredList = users.filter(
    (user) =>
      user.id.toString().indexOf(id) !== -1 &&
      user.name.indexOf(name) !== -1 &&
      user.spot.indexOf(spot) !== -1 &&
      user.mail.indexOf(login) !== -1
  );

  return (
    <div className={styles.box}>
      <Grid
        className={classes.root}
        alignItems="center"
        justify="center"
        container
        spacing={4}
      >
        <Grid item md={2} xs={6}>
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
        <Grid item md={2} xs={6}>
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
              ФИО
            </InputLabel>
            <Select
              disableUnderline
              labelId="demo-simple-select-placeholder-label-label"
              id="demo-simple-select-placeholder-label"
              value={name}
              onChange={handleName}
              displayEmpty
              className={classes.selector}
            >
              <MenuItem value="">
                <em>Введите ФИО участника</em>
              </MenuItem>
              <MenuItem value="Петров Петр Петрович">
                Петров Петр Петрович
              </MenuItem>
              <MenuItem value="Сергеев Сергей Сергеевич">
                Сергеев Сергей Сергеевич
              </MenuItem>
              <MenuItem value="Иванов Иван Иванович">
                Иванов Иван Иванович
              </MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item md={2} xs={6}>
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
        <Grid item md={2} xs={6}>
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
              Почта(логин)
            </InputLabel>
            <Select
              disableUnderline
              labelId="demo-simple-select-placeholder-label-label"
              id="demo-simple-select-placeholder-label"
              value={login}
              onChange={handleLogin}
              displayEmpty
              className={classes.selector}
            >
              <MenuItem value="">
                <em>Введите почту участника</em>
              </MenuItem>
              <MenuItem value="petr@mail.ru">petr@mail.ru</MenuItem>
              <MenuItem value="serii@mail.ru">serii@mail.ru</MenuItem>
              <MenuItem value="ivan@mail.ru">ivan@mail.ru</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item md={2} xs={6}>
          <FormControl className={classes.formControlButton}>
            <Button
              className={classes.myButton}
              onClick={() => dispatch(filteredUsers(filteredList))}
              variant="contained"
              color="primary"
            >
              Применить фильтры
            </Button>
          </FormControl>
        </Grid>
      </Grid>
    </div>
  );
}

export default Filter;
