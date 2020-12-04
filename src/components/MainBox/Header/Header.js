import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import styles from "./Header.module.css"

function Header(props) {

  const useStyles = makeStyles({
    root: {
      flexGrow: 1,
      boxShadow:"none",
    },
    tabs: {
      outline:"none"
    },
    tab: {
      textTransform: "none",
      marginRight:30
    }
  });

    const classes = useStyles();
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
      setValue(newValue);
    }
  return (
    <div className={styles.box}>
      <Paper className={classes.root}>
        <Tabs
          className={classes.tabs}
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          centered
        >
          <Tab className={classes.tab} label="О платформе" />
          <Tab className={classes.tab} label="Загрузка пользователей" />
          <Tab className={classes.tab} label="Список пользователей" />
        </Tabs>
      </Paper>
    </div>
  );
}

export default Header;