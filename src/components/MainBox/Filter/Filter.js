import React, { useState } from "react";
import styles from "./Filter.module.css";
import { Grid } from "@material-ui/core";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import NativeSelect from "@material-ui/core/NativeSelect";
import makeStyles from "@material-ui/core/styles/makeStyles";
import Button from "@material-ui/core/Button";
import { useDispatch, useSelector } from "react-redux";
import { filteredUsers } from "../../redux/actions";

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
      fontSize: "10px",
      fontWeight: "600",
      color: "#797979",
    },
  }));

  const classes = useStyles();

  const dispatch = useDispatch();
  const users = useSelector((state) => state.listing.users);

  const [id, setId] = useState(0);
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
        alignContent="center"
        container
        spacing={1}
      >
        <Grid item md={2} xs={6}>
          <FormControl className={classes.formControl}>
            <InputLabel
              style={{
                lineHeight: "1px",
                color: "rgb(92 94 179)",
                fontSize: "20px",
                fontWeight: "bold",
              }}
              htmlFor="uncontrolled-native"
            >
              ID
            </InputLabel>
            <NativeSelect
              disableUnderline={true}
              className={classes.selector}
              defaultValue={10}
            >
              <option value={10}>Введите ID</option>
              <option onClick={() => setId(1)} value={20}>
                1
              </option>
              <option onClick={() => setId(2)} value={30}>
                2
              </option>
              <option onClick={() => setId(3)} value={40}>
                3
              </option>
            </NativeSelect>
          </FormControl>
        </Grid>
        <Grid item md={2} xs={6}>
          <FormControl className={classes.formControl}>
            <InputLabel
              style={{
                lineHeight: "1px",
                color: "rgb(92 94 179)",
                fontSize: "20px",
                fontWeight: "bold",
              }}
              htmlFor="uncontrolled-native"
            >
              ФИО
            </InputLabel>
            <NativeSelect
              disableUnderline={true}
              className={classes.selector}
              defaultValue={10}
            >
              <option value={10}>Введите ФИО участника</option>
              <option
                onClick={() => setName("Петров Петр Петрович")}
                value={20}
              >
                Петров Петр Петрович
              </option>
              <option
                onClick={() => setName("Сергеев Сергей Сергеевич")}
                value={30}
              >
                Сергеев Сергей Сергеевич
              </option>
              <option
                onClick={() => setName("Иванов Иван Иванович")}
                value={30}
              >
                Иванов Иван Иванович
              </option>
            </NativeSelect>
          </FormControl>
        </Grid>
        <Grid item md={2} xs={6}>
          <FormControl className={classes.formControl}>
            <InputLabel
              style={{
                lineHeight: "1px",
                color: "rgb(92 94 179)",
                fontSize: "21px",
                fontWeight: "bold",
              }}
              htmlFor="uncontrolled-native"
            >
              Должность
            </InputLabel>
            <NativeSelect
              disableUnderline={true}
              className={classes.selector}
              defaultValue={10}
            >
              <option value={10}>Введите должность участника</option>
              <option onClick={() => setSpot("Внешний Эксперт")} value={20}>
                Внешний Эксперт
              </option>
              <option onClick={() => setSpot("HR BP")} value={30}>
                HR BP
              </option>
            </NativeSelect>
          </FormControl>
        </Grid>
        <Grid item md={2} xs={6}>
          <FormControl className={classes.formControl}>
            <InputLabel
              style={{
                lineHeight: "1px",
                color: "rgb(92 94 179)",
                fontSize: "21px",
                fontWeight: "bold",
              }}
              htmlFor="uncontrolled-native"
            >
              Почта(логин)
            </InputLabel>
            <NativeSelect
              disableUnderline={true}
              className={classes.selector}
              defaultValue={10}
            >
              <option value={10}>Введите e-mai участника</option>
              <option onClick={() => setLogin("petr@mail.ru")} value={20}>
                petr@mail.ru
              </option>
              <option onClick={() => setLogin("serii@mail.ru")} value={30}>
                serii@mail.ru
              </option>
              <option onClick={() => setLogin("ivan@mail.ru")} value={30}>
                ivan@mail.ru
              </option>
            </NativeSelect>
          </FormControl>
        </Grid>
        <Grid item md={2} xs={6}>
          <FormControl className={classes.formControlButton}>
            <Button
              onClick={() => console.log(id)}
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
