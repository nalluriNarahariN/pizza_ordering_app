import React, { useState, useEffect } from "react";
import { makeStyles } from "@mui/styles";
import { Routes } from "react-router-dom";
import { Route, useNavigate, Link, useLocation } from "react-router-dom";
import Collapse from "@mui/material/Collapse";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import List from "@mui/material/List";
import { Typography, Divider } from "@mui/material";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import logo1 from "../../Assets/logo1C.svg";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { deepOrange } from "@mui/material/colors";
import { Theme } from "@mui/system";
import { createTheme } from "@mui/material/styles";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Items from "./Items";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const Home = () => {
  return (
    <div>
      <Routes>
        <Route path="items" element={<Items />} />
      </Routes>
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
    </div>
  );
};

export default Home;
