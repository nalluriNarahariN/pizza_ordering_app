import React, { useState, useEffect } from "react";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import axios from "axios";

const Item = styled(Paper)(({ theme }) => ({
  // backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(4),
  textAlign: "center",
  //   color: theme.palette.text.secondary,
}));

const Orders = () => {
  // state initialization
  const [myOrders, setMyOrders] = useState([]);

  // use effect to get previous orders from db
  useEffect(() => {
    let userData = JSON.parse(localStorage.getItem("userData") || "{}");
    axios
      .post("http://localhost:3030/transaction/myOrders", {
        email: userData.email,
      })
      .then((res) => {
        if (res.data.error === 0) {
          let items = res.data.data.myOrders;
          setMyOrders(items[0]);
        } else {
          alert(res.data.data.message);
        }
      })
      .catch((err) => {
        console.log(err);
        alert(err);
      });
  }, []);

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
          {myOrders.length > 0 ? (
            myOrders.map((valu: any, key: any) => {
              var randomColor = Math.floor(Math.random() * 16777215).toString(
                16
              );
              return (
                <Grid key={valu._id} item xs={8}>
                  <Item sx={{ backgroundColor: `#${randomColor} !important` }}>
                    <h4>Order ID : {valu._id}</h4>
                    {valu.pizzas
                      ? valu.pizzas.map((val: any) => {
                          if (val.img) {
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
                                        <Typography
                                          component="div"
                                          variant="h5"
                                        >
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
                                          {val.description}
                                          <br />
                                          {valu.extras.map(
                                            (res: any, key: any) => {
                                              return `Extras : ${res}, `;
                                            }
                                          )}
                                        </Typography>
                                      </CardContent>
                                    </Box>
                                  </Card>
                                  <br />
                                </Box>
                              </div>
                            );
                          } else {
                            return null;
                          }
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
