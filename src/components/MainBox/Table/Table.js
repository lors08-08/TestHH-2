import React, { useState } from "react";
import styles from "./Table.module.css";
import { useSelector } from "react-redux";
import Checkbox from "@material-ui/core/Checkbox";
import makeStyles from "@material-ui/core/styles/makeStyles";
import AddUser from "./AddUser";

function Table() {
  const users = useSelector((state) => state.listing.users);
  const [checked, setChecked] = useState(false);

  const useStyles = makeStyles((theme) => ({
    button: {
      position: "relative",
      right: "70px",
      width: "0px",
      height: "0px",
    },
  }));
  const classes = useStyles();

  return (
    <div className={styles.box}>
      <table className={styles.table}>
        <tr className={styles.cellTop}>
          <th className={styles.firstColumn}>ID</th>
          <th>Дата Регистрации</th>
          <th>ФИО</th>
          <th>Должность</th>
          <th>Почта(логин)</th>
          <th>Пароль</th>
          <th>
            Телефон, привязанный
            <br />
            мессенджеру
          </th>
        </tr>

        {users.map((user) => {
          return (
            <tr key={user.id} className={styles.cellList}>
              <th className={styles.firstColumn}>
                <Checkbox
                  onChange={() => {
                    setChecked(!checked);
                  }}
                  checked={checked}
                  className={classes.button}
                  color="primary"
                  inputProps={{ "aria-label": "secondary checkbox" }}
                />
                {user.id}
              </th>
              <th>{user.date}</th>
              <th>{user.name}</th>
              <th>{user.spot}</th>
              <th>{user.mail}</th>
              <th>{user.password}</th>
              <th>{user.number}</th>
            </tr>
          );
        })}
      </table>
      <AddUser />
    </div>
  );
}

export default Table;
