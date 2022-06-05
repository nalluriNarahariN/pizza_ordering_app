import React, { useState, useEffect } from "react";
import { Routes } from "react-router-dom";
import { Route, useNavigate, Link, useLocation } from "react-router-dom";
import bg from "../../Assets/bg.png";
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
  return (
    <Box>
      <Appbar avatarName="NN" />
      <Box sx={{ marginTop: 10 }}>
        <Routes>
          <Route path="items" element={<Items />} />
          <Route path="cart" element={<Cart />} />
          <Route path="my-orders" element={<Orders />} />
        </Routes>
      </Box>

      {/* <Box sx={{ width: 1 }}>
        <Box display="grid" gap={2}>
          <Box gridColumn="span 12">
            <Item>xs=8</Item>
          </Box>
          <Box gridColumn="span 12">
            <Item>xs=8</Item>
          </Box>
        </Box>
      </Box> */}
    </Box>
  );
};

export default Home;
