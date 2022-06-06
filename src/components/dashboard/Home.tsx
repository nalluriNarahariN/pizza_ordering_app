import React, { useState, useEffect } from "react";
import { Routes } from "react-router-dom";
import { Route, useNavigate, Link, useLocation } from "react-router-dom";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Items from "./Items";
import Cart from "../cart/Cart";
import Appbar from "../Appbar/Appbar";
import Orders from "../MyOrders/Orders";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const Home = () => {
  // hooks declaration
  const navigate = useNavigate();

  //state initialization
  const [avatarName, setAvatarName] = useState("");

  // use effect to check if logged in and set avatar name
  useEffect(() => {
    if (JSON.parse(localStorage.getItem("userData") || "")) {
      const userData = JSON.parse(localStorage.getItem("userData") || "");
      setAvatarName(
        `${userData.firstName.charAt(0)}${userData.lastName.charAt(0)}`
      );
    } else {
      navigate("/login");
    }
  }, []);

  return (
    <Box>
      <Appbar avatarName={avatarName} />
      <Box sx={{ marginTop: 10 }}>
        <Routes>
          <Route path="items" element={<Items />} />
          <Route path="cart" element={<Cart />} />
          <Route path="my-orders" element={<Orders />} />
        </Routes>
      </Box>
    </Box>
  );
};

export default Home;
