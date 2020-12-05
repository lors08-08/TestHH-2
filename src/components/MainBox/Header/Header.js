import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import styles from "./Header.module.css";
import Filter from "../Filter/Filter";

function Header(props) {
  const useStyles = makeStyles({
    root: {
      flexGrow: 1,
      boxShadow: "0 0 2px black",
      zIndex:"99"
    },
    tabs: {
      outline: "none",
    },
    tab: {
      fontWeight: 600,
      fontSize: "12px",
      textTransform: "none",
      marginRight: 30,
      outline: "none !important",
    },
  });

  const classes = useStyles();
  const [value, setValue] = React.useState(2);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <div className={styles.box}>
      <Paper className={classes.root}>
        <Tabs
          TabIndicatorProps={{
            style: {
              height: "1px",
            },
          }}
          className={classes.tabs}
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          centered
        >
          <Tab disabled className={classes.tab} label="О платформе" />
          <Tab
            disabled
            className={classes.tab}
            label="Загрузка пользователей"
          />
          <Tab value={2} className={classes.tab} label="Список пользователей" />
        </Tabs>
      </Paper>
    </div>
  );
}

export default Header;
