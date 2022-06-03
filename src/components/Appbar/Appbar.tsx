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

const drawerWidth = 260;

const useStyles = makeStyles((theme: Theme) => ({
  orange: {
    color: theme.palette.getContrastText(deepOrange[500]),
    backgroundColor: deepOrange[500],
  },
  toolbarTitle: {
    flexGrow: 1,
  },
  appBar: {
    // width: `calc(100% - ${drawerWidth}px) !important`,
    // marginLeft: drawerWidth,
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
  const classes = useStyles();
  const [avatarName, setAvatarName] = useState();
  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef<any>(null);

  const navigate = useNavigate();

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

  useEffect(() => {
    setAvatarName(props.avatarName);
    // var yesterday = new Date(dayjs().$d.getTime());
    // yesterday.setDate(dayjs().$d.getDate() - 1);
    // sessionStorage.setItem("expiresAt", yesterday);
    // sessionStorage.setItem(
    //   "refreshToken",
    //   "eyJjdHkiOiJKV1QiLCJlbmMiOiJBMjU2R0NNIiwiYWxnIjoiUlNBLU9BRVAifQ.QFKad9AfnJ50fwkG0PCVFJsPp3g0Wgjg1p4EmQDK-K0Kcd9C1x5XgR71sC434v5pj_EpRbwNu7YoGsqHp9eU4Meg4WczicrhfefcJ90TAjuo_6j3c302jty5BP8DR8y-6Kz26ZHnZnb5vDb6Ek844RkbPBJO6PyVQ9u66-7rVWq0CbZAkOzwqluXRXKexvbiKfEF7TTO052Q9t2Fg5C-B8r-f4IS0AA01W219n-k6LAfYLo-NDGzQZ1jNgXc3BVZWv-yrzWJC7OcZ63y5k0d0sjqVNRkWeJL-o1_oUI7_c7m8heiTLOTz81oAgqZMZl8G2bSjosoIlc9Js_Zdebdfg.uwV7_orZPPAcc5gY.Y32fIdthOT4wzjl_R1X8uVWus0BH1g_jbxC4G4e8CnaiBrM0ISNqy4TzwDRgsChSMS2qJoSxl7QZMrtjV1sjduBGyj0Tk_aePSFLlnfkUHWANcad1QJq4TtM7r_1eLQipj1FK_z5KFXoA2gv-LfBHX4rcdGQzYYF7RIqkLg9DjHwzI3zQKCil3Xy5jaxNhaUclNij9kfT5i7JQ25bgZcgbQNKhredqCbiIPDBmExN-_zlexaOvkPU-BjHjkmDknHiFGp3_oBMRPQIoBT1SP52Zu_-BKifuHGkfSnTRljdYhWjPr037gxv-8YiPciHcNtUIL1lA7qQJ8ncwkxCcRwX2dyTAt9VEKVyAPHNaq6Osn3V6dQqqwvI0oTriWZb5YIXujYqjwp52VKqwS5wMcCQYRVCJr57xIklj5zfGNB62y5NrL5-mjXAXxh5E5m6hvQb2AcAAuFW8x0i1dmjYutRaZ3E79DuttB3JcSWDhkPXucQ7O1GvNtrMbIm7C-DcPNfIdiUV0vwuojz6bMo1bpJZM6T1hlFy2LevQ1xJWFqoJ66-y3pTZvnF7wA3WavnHrUTwdU12bRM9MNIodWJdPJLRIDFdsMrJ0KUyJiMKuNOB1T8avDFmafPUeARGwmSiuaNclWs7Vlf7Da6BLH7Ta-G25I5oP5Lpss2szlrMnYDLbVRREHmR781e38VKKy6w0o9JWIVOt4QrhZh2hAUNjVVQ_97e0zf3lSuqwYJPvDPSlYwXwMgilDQyA0q9gcEo4RT_B7KX_vF0x--gUmKgVgDwUcbHIiylZnKWh0j0CKPcMjtfiZfF_AYIC3QHnDZ87V_neVmrQ_wvp8fwTfRKVIMfFYkR825oKtrkXFFfijqQ9JzJjn2C-rmDnGg9WyEgHHEEEqtwr3RMaaDG6AFZzK_DgflfkF_MWnTWCe3KMwako6OYwKsVxKRV1nx_-ComgCWmNESGXLi1CoiTKw9QWfOoYZN91aybwerAeZXWcU5ML6CyHwPOxOJaXxvkelhyERvd7evFVKSBve_6B0Et-9td_xob5yB7CWtBShw41KUMaBpyi54yC3Gk680_7cqyZMe4It_vWIb49SpxNXvdwT44GZyPR3kbp_Aa3TCLN-pD9M6dwMVkc21epY76oeyoltxSnfrizqkNRNL383f2SsUh8-lM0gYnCJECEfOce7NxlVzNtup98yU7aZ43dcVmjoMAtL6ZzTJ-bTp19r0TUd1sbd6Z4NTCHGAqbxaaQxu8vx23IZXXSDgmxgKjHGvi98bBYf5yQSkWVeSNP4rH-kOfgKrr3nRyzIHXc5owM1g.NXy_vn4qEN1G1Nnz-d9n_g"
    // );
  }, [props.avatarName]);

  return (
    <div>
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <Typography className={classes.toolbarTitle} variant="h2" noWrap>
            PIZZERIAA
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
