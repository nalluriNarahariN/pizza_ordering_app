import React, { useState } from "react";
import axios from "axios";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useForm, Controller } from "react-hook-form";
import { Box, Button, TextField, Typography } from "@mui/material";
import useStyles from "../../Material-UI/MaterialUI_css";

const Register = () => {
  // validation schema for form
  const schema = yup.object().shape({
    firstName: yup.string().required("First name required"),
    lastName: yup.string().required("Last name required"),
    email: yup.string().email().required("Email required"),
    password: yup
      .string()
      .required("Please Enter your password")
      .matches(
        /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
        "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character"
      ),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref("password"), null], "Passwords must match"),
    contactNumber: yup
      .string()
      .required()
      .matches(
        /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/,
        "Invalid Contact number"
      ),
    country: yup.string().required("Country required"),
  });

  const classes = useStyles();

  // react hook form hooks
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  // declaring states
  const [loading, setLoading] = useState(false);

  // react hook form submit function
  const onSubmit = (data: any) => {
    axios
      .post("http://localhost:3030/user/register", data)
      .then((res) => {
        console.log(res);
        alert(
          "Registration Successful, please login with your credentials to continue"
        );
      })
      .catch((e) => {
        alert("Something went wrong please check details");
      });
  };

  return (
    <div style={{ cursor: loading ? "wait" : "default" }}>
      <Typography sx={{ padding: 2 }} variant="h4" textAlign="center">
        Register
      </Typography>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Controller
          name="firstName"
          control={control}
          render={({ field }) => (
            <TextField
              autoComplete="off"
              id="firstName"
              fullWidth={true}
              error={errors.firstName ? true : false}
              label="First Name"
              type="text"
              className={classes.formBox}
              required={true}
              variant="outlined"
              {...field}
              helperText={errors.firstName && errors.firstName.message}
            />
          )}
        />
        <Controller
          name="lastName"
          control={control}
          render={({ field }) => (
            <TextField
              autoComplete="off"
              fullWidth={true}
              error={errors.lastName ? true : false}
              className={classes.formBox}
              label="Last Name"
              type="text"
              required={true}
              variant="outlined"
              {...field}
              helperText={errors.lastName && errors.lastName.message}
            />
          )}
        />
        <br />
        <Controller
          name="email"
          //   id="email"
          control={control}
          render={({ field }) => (
            <TextField
              autoComplete="off"
              fullWidth={true}
              error={errors.email ? true : false}
              className={classes.formBox}
              label="Email"
              type="email"
              required={true}
              variant="outlined"
              {...field}
              helperText={errors.email && errors.email.message}
            />
          )}
        />
        <br />
        <Controller
          name="password"
          // id="password"
          control={control}
          render={({ field }) => (
            <TextField
              autoComplete="off"
              fullWidth={true}
              error={errors.password ? true : false}
              className={classes.formBox}
              label="Password"
              type="password"
              required={true}
              variant="outlined"
              {...field}
              helperText={errors.password && errors.password.message}
              //   InputProps={{
              //     endAdornment: (
              //       <InputAdornment position="start">
              //         <Tooltip
              //           placement="right"
              //           title={<h3>{toolTipMessage}</h3>}
              //           TransitionComponent={Zoom}
              //         >
              //           <HelpIcon style={{ cursor: "help" }} />
              //         </Tooltip>
              //       </InputAdornment>
              //     ),
              //   }}
            />
          )}
        />
        <br />
        <Controller
          name="confirmPassword"
          //   id="confirmPassword"
          control={control}
          render={({ field }) => (
            <TextField
              autoComplete="off"
              className={classes.formBox}
              fullWidth={true}
              error={errors.confirmPassword ? true : false}
              label="Confirm Password"
              type="password"
              required={true}
              variant="outlined"
              {...field}
              helperText={
                errors.confirmPassword && errors.confirmPassword.message
              }
            />
          )}
        />
        <br />
        <Controller
          name="contactNumber"
          //   id="contact_number"
          control={control}
          render={({ field }) => (
            <TextField
              autoComplete="off"
              fullWidth={true}
              error={errors.contactNumber ? true : false}
              className={classes.formBox}
              label="Mobile"
              type="text"
              required={true}
              variant="outlined"
              {...field}
              helperText={errors.contactNumber && errors.contactNumber.message}
            />
          )}
        />
        <br />
        <Controller
          name="country"
          control={control}
          render={({ field }) => (
            <TextField
              autoComplete="off"
              fullWidth={true}
              error={errors.country ? true : false}
              className={classes.formBox}
              label="Country"
              type="text"
              required={true}
              variant="outlined"
              {...field}
              helperText={errors.country && errors.country.message}
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
            Register
          </Button>
        </Box>
      </form>
    </div>
  );
};

export default Register;
