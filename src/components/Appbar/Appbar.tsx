import React, { useState, useEffect } from "react";
import Avatar from "@mui/material/Avatar";
import { deepOrange } from "@mui/material/colors";
import Typography from "@mui/material/Typography";
import AppBar from "@mui/material/AppBar";
import {
  Toolbar,
  Grow,
  ClickAwayListener,
  Paper,
  Popper,
  MenuItem,
  MenuList,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import { useNavigate } from "react-router-dom";
import { Theme } from "@mui/system";

const useStyles = makeStyles((theme: Theme) => ({
  orange: {
    color: theme.palette.getContrastText(deepOrange[500]),
    backgroundColor: deepOrange[500],
  },
  toolbarTitle: {
    flexGrow: 1,
  },
  appBar: {
    backgroundColor: "#328DFF",
    flexGrow: 1,
  },
  root: {
    display: "flex",
  },
  paper: {
    marginRight: theme.spacing(2),
  },
}));

const Appbar = (props: any) => {
  // hooks declaration
  const classes = useStyles();
  const navigate = useNavigate();

  // state initialization
  const [avatarName, setAvatarName] = useState();
  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef<any>(null);

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event: any) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpen(false);
  };
  function handleListKeyDown(event: any) {
    if (event.key === "Tab") {
      event.preventDefault();
      setOpen(false);
    }
  }

  // function to logout
  const logout = () => {
    localStorage.clear();
    sessionStorage.clear();
    navigate("/");
  };

  // return focus to the button when we transitioned from !open -> open
  const prevOpen = React.useRef(open);
  React.useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current.focus();
    }

    prevOpen.current = open;
  }, [open]);

  // use effect to set avatar name
  useEffect(() => {
    setAvatarName(props.avatarName);
  }, [props.avatarName]);

  return (
    <div>
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <Typography className={classes.toolbarTitle} variant="h2" noWrap>
            PIZZERIA
          </Typography>
          <Avatar
            role="button"
            ref={anchorRef}
            aria-controls={open ? "menu-list-grow" : undefined}
            aria-haspopup="true"
            onClick={handleToggle}
            sx={{
              backgroundColor: deepOrange[500],
            }}
            className={classes.orange}
          >
            {avatarName}
          </Avatar>
          <Popper
            open={open}
            anchorEl={anchorRef.current}
            role={undefined}
            transition
            disablePortal
          >
            {({ TransitionProps, placement }) => (
              <Grow
                {...TransitionProps}
                style={{
                  transformOrigin:
                    placement === "bottom" ? "center top" : "center bottom",
                }}
              >
                <Paper>
                  <ClickAwayListener onClickAway={handleClose}>
                    <MenuList
                      autoFocusItem={open}
                      id="menu-list-grow"
                      onKeyDown={handleListKeyDown}
                    >
                      <MenuItem
                        onClick={(e) => {
                          handleClose(e);
                          navigate("/dashboard/my-orders");
                        }}
                      >
                        My Orders
                      </MenuItem>
                      <MenuItem
                        onClick={(e) => {
                          handleClose(e);
                          navigate("/dashboard/items");
                        }}
                      >
                        Buy Pizza
                      </MenuItem>
                      <MenuItem
                        onClick={(e) => {
                          handleClose(e);
                          navigate("/dashboard/cart");
                        }}
                      >
                        Cart
                      </MenuItem>
                      <MenuItem onClick={() => logout()}>Logout</MenuItem>
                    </MenuList>
                  </ClickAwayListener>
                </Paper>
              </Grow>
            )}
          </Popper>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Appbar;
