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
  Grid,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import useStyles from "../../Material-UI/MaterialUI_css";
import { styled } from "@mui/material/styles";
import Register from "./Register";
import svg from "../../Assets/svg.png";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
}));

const Login = () => {
  const classes = useStyles();
  // Used for hook form
  const { handleSubmit, control } = useForm();

  const navigate = useNavigate();

  const onSubmit = (data: any) => {
    axios
      .post("http://localhost:3030/user/login", data)
      .then((res) => {
        console.log(res);
        alert("Login Successful");
        localStorage.setItem(
          "userData",
          JSON.stringify(res.data.data.userData)
        );
        navigate("/dashboard/items");
      })
      .catch((e) => {
        alert(e.response.data.data.message);
      });
  };

  return (
    <div>
      <div className={classes.Login_root}>
        <div className={classes.Login_waves}>
          <img style={{ height: 200, width: "100%" }} src={svg} alt="svg" />

          <Box>
            <Grid justifyContent="space-around" container spacing={2}>
              <Grid item xs={5}>
                <Item>
                  {/* <Paper elevation={0} square={true}> */}
                  <h2> Login</h2>
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
                  {/* </Paper> */}
                </Item>
              </Grid>
              <strong>(OR)</strong>
              <Grid item xs={5}>
                <Item>
                  <Register />
                </Item>
              </Grid>
            </Grid>
          </Box>
        </div>
      </div>
    </div>
  );
};

export default Login;
