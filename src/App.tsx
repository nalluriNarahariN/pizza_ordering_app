import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";
import theme from "../src/Material-UI/Theme/Theme";
import Login from "./components/Login/Login";
import Home from "./components/dashboard/Home";
import Test from "./test";

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Test />} />
            <Route path="/login" element={<Login />} />
            <Route path="/dashboard/*" element={<Home />} />
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </div>
  );
}

export default App;
