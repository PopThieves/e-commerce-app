import React from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Badge,
  MenuItem,
  Menu,
  Typography,
} from "@material-ui/core";
import { ShoppingCart } from "@material-ui/icons";
import classes from "*.module.css";

const Navbar = () => {
  return (
    <div>
      <AppBar position="fixed" className={classes.appBar} color="inherit">
        <Toolbar>
          <Typography variant="h6" className={classes.title} color="inherit">
            <img
              src={}
              alt="commerce.js"
              height="25px"
              className={classes.image}
            />
            Commerce.js
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Navbar;
