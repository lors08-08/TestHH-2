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
    '.MuiDataGrid-colCellWrapper': {
      color:"#748bde",
    }
  },
})(() => null);

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
      `${params.getValue('firstName') || ''} ${params.getValue('lastName') || ''}`,
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
      <div style={{ height: 300, width: '80%', margin:"auto"}} >
        <GlobalCss />
        <DataGrid hideFooterSelectedRowCount={true} rowCount={3} showCellRightBorder showColumnRightBorder rows={rows} columns={columns} pageSize={3} checkboxSelection />
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