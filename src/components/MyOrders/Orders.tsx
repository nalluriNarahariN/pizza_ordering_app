import React, { useState, useEffect } from "react";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { useLocation } from "react-router-dom";
import { useTheme } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(4),
  textAlign: "center",
  //   color: theme.palette.text.secondary,
}));

const ordersJson = [
  {
    extras: [
      "Golden Corn",
      "Chicken Tikka",
      "Chicken Pepperoni",
      "Black Olives",
      "Onion",
    ],
    pizzas: [
      {
        value: "Veg Extravaganza",
        description:
          "Black olives, capsicum, onion, grilled mushroom, corn, tomato, jalapeno & extra cheese",
        img: "https://images.dominos.co.in/new_veg_extravaganza.jpg",
      },
      {
        value: "Chicken Maximus",
        description:
          "Loaded to the Max with Chicken Tikka, Chicken Keema, Chicken Sausage and a double dose of grilled Chicken Rashers.",
        img: "https://images.dominos.co.in/PIZ5158_1.jpg",
      },
    ],
    total: 26,
    size: "large",
    ID: 123,
  },
  {
    extras: [
      "Golden Corn",
      "Chicken Tikka",
      "Chicken Pepperoni",
      "Black Olives",
      "Onion",
    ],
    pizzas: [
      {
        value: "Veg Extravaganza",
        description:
          "Black olives, capsicum, onion, grilled mushroom, corn, tomato, jalapeno & extra cheese",
        img: "https://images.dominos.co.in/new_veg_extravaganza.jpg",
      },
      {
        value: "Chicken Maximus",
        description:
          "Loaded to the Max with Chicken Tikka, Chicken Keema, Chicken Sausage and a double dose of grilled Chicken Rashers.",
        img: "https://images.dominos.co.in/PIZ5158_1.jpg",
      },
    ],
    total: 26,
    size: "large",
    ID: 3123,
  },
];

const Orders = () => {
  return (
    <div>
      <Box
        justifyContent="center"
        alignItems="center"
        sx={{ flexGrow: 1, alignItems: "center" }}
      >
        <Typography variant="h4" textAlign="center">
          MY ORDERS
        </Typography>
        <Grid justifyContent="center" alignItems="center" container spacing={2}>
          {ordersJson.length > 0 ? (
            ordersJson.map((valu: any) => {
              return (
                <Grid item xs={8}>
                  <Item>
                    <h4>Order ID : {valu.ID}</h4>
                    {valu.pizzas
                      ? valu.pizzas.map((val: any) => {
                          return (
                            <div>
                              <Box>
                                <Card sx={{ display: "flex" }}>
                                  <CardMedia
                                    component="img"
                                    sx={{ width: 150, height: 100 }}
                                    image={val.img}
                                    alt="noImg"
                                  />
                                  <Box
                                    sx={{
                                      display: "flex",
                                      flexDirection: "column",
                                    }}
                                  >
                                    <CardContent sx={{ flex: "1 0 auto" }}>
                                      <Typography component="div" variant="h5">
                                        {val.value}
                                      </Typography>
                                      <Typography
                                        variant="subtitle1"
                                        color="text.secondary"
                                        component="div"
                                        sx={{
                                          display: "flex",
                                          alignItems: "center",
                                        }}
                                      >
                                        {/* {location.state.extras.map(
                                                  (value: any) => {
                                                    return `${value}, `;
                                                  }
                                                )} */}
                                        {val.description}
                                        <br />
                                        {valu.extras.map((res: any) => {
                                          return `Extras : ${res}, `;
                                        })}
                                      </Typography>
                                    </CardContent>
                                  </Box>
                                </Card>
                                <br />
                              </Box>
                            </div>
                          );
                        })
                      : "Loading"}
                  </Item>
                </Grid>
              );
            })
          ) : (
            <h1>No Orders</h1>
          )}
        </Grid>
      </Box>
    </div>
  );
};

export default Orders;
