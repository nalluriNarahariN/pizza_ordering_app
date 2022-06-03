import React from "react";
import axios from "axios";
import { useForm, Controller } from "react-hook-form";
import {
  Box,
  Button,
  Container,
  TextField,
  Paper,
  Snackbar,
  Alert,
  AlertTitle,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import useStyles from "../../Material-UI/MaterialUI_css";

const Login = () => {
  const classes = useStyles();
  // Used for hook form
  const { handleSubmit, control } = useForm();

  const navigate = useNavigate();

  const onSubmit = (data: any) => {};

  return (
    <div>
      <div className={classes.Login_root}>
        <div className={classes.Login_waves}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path
              fill="#0099ff"
              fill-opacity="1"
              d="M0,128L60,144C120,160,240,192,360,170.7C480,149,600,75,720,58.7C840,43,960,85,1080,106.7C1200,128,1320,128,1380,128L1440,128L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"
            ></path>
          </svg>
          <Box className={classes.Login_box}>
            <Container maxWidth="sm">
              <Paper
                className={classes.Login_paper}
                elevation={0}
                square={true}
              >
                <h2 className={classes.formBox}> Login</h2>
                <form onSubmit={handleSubmit(onSubmit)}>
                  <Controller
                    name="email"
                    control={control}
                    render={({ field }) => (
                      <TextField
                        autoComplete="off"
                        id="email"
                        fullWidth={true}
                        label="Email"
                        type="text"
                        className={classes.formBox}
                        required={true}
                        variant="outlined"
                        {...field}
                      />
                    )}
                  />
                  <Controller
                    name="password"
                    control={control}
                    render={({ field }) => (
                      <TextField
                        autoComplete="off"
                        id="password"
                        fullWidth={true}
                        label="Password"
                        type="password"
                        className={classes.formBox}
                        required={true}
                        variant="outlined"
                        {...field}
                      />
                    )}
                  />
                  <Box my={2}>
                    <Button
                      type="submit"
                      variant="contained"
                      color="primary"
                      style={{ width: "100%" }}
                    >
                      Login
                    </Button>
                  </Box>
                </form>
              </Paper>
            </Container>
          </Box>
        </div>
      </div>
    </div>
  );
};

export default Login;
