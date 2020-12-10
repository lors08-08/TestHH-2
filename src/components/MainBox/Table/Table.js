import React, { useState } from "react";
import styles from "./Table.module.css";
import { useSelector } from "react-redux";
import Checkbox from "@material-ui/core/Checkbox";
import makeStyles from "@material-ui/core/styles/makeStyles";
import AddUser from "./AddUser";
import {DataGrid} from "@material-ui/data-grid";
import {withStyles} from "@material-ui/styles";

const GlobalCss = withStyles({
  // @global is handled by jss-plugin-global.
  '@global': {
    // You should target [class*="MuiButton-root"] instead if you nest themes.
    '.MuiDataGrid-colCellTitleContainer': {
      color:"#748bde",
      fontSize:"12px",
      justifyContent:"center",
    },
    '.MuiDataGrid-cell': {
      justifyContent:"center",
      lineHeight:"20px !important",
      display:"flex !important",
      alignItems:"center",
      whiteSpace:"break-spaces !important"
    },
    '.MuiDataGrid-columnsContainer': {
      justifyContent:"center",
      lineHeight:"20px !important",
      display:"flex !important",
      alignItems:"center",
      whiteSpace:"break-spaces !important"
    }
  },
})(() => null);

function Table() {
  const users = useSelector((state) => state.listing.users);
  const [checked, setChecked] = useState(false);

  const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'date', headerName: 'Дата регистрации', width: 150 },
    { field: 'name', headerName: 'ФИО', width: 150 },
    { field: 'spot', headerName: 'Должность', width: 140},
    { field: 'mail', headerName: 'Почта(логин)', width: 140},
    { field: 'password', headerName: 'Пароль', width: 140},
    {
      field: 'number',
      headerName: 'Телефон, привязанный к мессенджеру',
      width: 170,
    }
  ];

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
      <div style={{ height: 300, width: '80%', margin:"auto"}} >
        <GlobalCss />
        <DataGrid headerHeight={60} rowHeight={60} autoHeight={true} hideFooterSelectedRowCount={true} rowCount={3} showCellRightBorder showColumnRightBorder rows={users} columns={columns} pageSize={3} checkboxSelection />
      </div>
      <AddUser />
    </div>
  );
}

export default Table;
// <table className={styles.table}>
//   <tr className={styles.cellTop}>
//     <th className={styles.firstColumn}>ID</th>
//     <th>Дата Регистрации</th>
//     <th>ФИО</th>
//     <th>Должность</th>
//     <th>Почта(логин)</th>
//     <th>Пароль</th>
//     <th>
//       Телефон, привязанный
//       <br />
//       мессенджеру
//     </th>
//   </tr>
//
//   {users.map((user) => {
//     return (
//       <tr key={user.id} className={styles.cellList}>
//         <th className={styles.firstColumn}>
//           <Checkbox
//             onChange={() => {
//               setChecked(!checked);
//             }}
//             checked={checked}
//             className={classes.button}
//             color="primary"
//             inputProps={{ "aria-label": "secondary checkbox" }}
//           />
//           {user.id}
//         </th>
//         <th>{user.date}</th>
//         <th>{user.name}</th>
//         <th>{user.spot}</th>
//         <th>{user.mail}</th>
//         <th>{user.password}</th>
//         <th>{user.number}</th>
//       </tr>
//     );
//   })}
// </table>