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
import {DataGrid} from "@material-ui/data-grid";
import createMuiTheme from "@material-ui/core/styles/createMuiTheme";

function Filter(props) {

  const theme = createMuiTheme({
    overrides: {
      root: {
        MuiDataGridColCellCheckbox: {
          // Some CSS
          backgroundColor: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
          borderRadius: 3,
          border: 0,
          color: 'white',
          height: 48,
          padding: '0 30px',
          boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
        },
      },
    },
  });

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

  const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'firstName', headerName: 'First name', width: 130 },
    { field: 'lastName', headerName: 'Last name', width: 130 },
    {
      field: 'age',
      headerName: 'Age',
      type: 'number',
      width: 90,
    },
    {
      field: 'fullName',
      headerName: 'Full name',
      description: 'This column has a value getter and is not sortable.',
      sortable: false,
      width: 160,
      valueGetter: (params) =>
        `${params.getValue('firstName') || ''} ${
          params.getValue('lastName') || ''
        }`,
    },
  ];

  const rows = [
    { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
    { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
    { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
    { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
    { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
    { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
    { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
    { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
    { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
  ];


  return (
    <div className={styles.box}>
      <Grid
        className={classes.root}
        alignItems="center"
        justify="center"
        container
        spacing={5}
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
      <div style={{ height: 400, width: '100%' }} >
        <DataGrid showCellRightBorder showColumnRightBorder rows={rows} columns={columns} pageSize={5} checkboxSelection />
      </div>
    </div>
  );
}

export default Filter;
