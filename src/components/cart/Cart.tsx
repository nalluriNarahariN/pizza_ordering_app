import React, { useState, useEffect } from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { useNavigate } from "react-router-dom";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import axios from "axios";
import { useWindowSize } from "usehooks-ts";
import Confetti from "react-confetti";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(4),
  textAlign: "center",
  //   color: theme.palette.text.secondary,
}));

const Cart = () => {
  // hooks declaration
  const navigate = useNavigate();
  const { width, height } = useWindowSize();

  // state initialization
  const [cartItems, setCartItems] = useState([
    {
      _id: "",
      pizzas: [],
      size: "",
      extras: [],
      email: "",
    },
  ]);
  const [total, setTotal] = useState(0);
  const [confettiStatus, setConfettiStatus] = useState(false);

  // use effect to get data from backend
  useEffect(() => {
    let userData = JSON.parse(localStorage.getItem("userData") || "{}");
    axios
      .post("http://localhost:3030/cart/getCartItems", {
        email: userData.email,
      })
      .then((res) => {
        if (res.data.error === 0) {
          let items = res.data.data.myCartItems;
          setCartItems(items);
          setTotal(
            calculateTotal(
              items[0].pizzas,
              items[0].size,
              items[0].extras.length
            )
          );
        } else {
          alert(res.data.data.message);
        }
      })
      .catch((err) => {
        console.log(err);
        alert(err);
      });
  }, []);

  // function to buy cart items
  const handleBuyItems = () => {
    let data: any = cartItems[0];
    data.total = total;
    data.id = data._id;
    axios
      .post("http://localhost:3030/transaction/buyItems", data)
      .then((res) => {
        if (res.data.error === 0) {
          setConfettiStatus(true);
          alert("Hurray! Item Bought");
          setTimeout(() => navigate("/dashboard/items"), 3000);
          // navigate("/dashboard/items");
        } else {
          alert(res.data.data.message);
        }
      })
      .catch((err) => {
        console.log(err);
        alert(err);
      });
  };

  // func to calculate toal
  const calculateTotal = (pizzas: any, size: string, extras: number) => {
    let sizeValue = 2;
    let count = 0;
    switch (size) {
      case "small":
        sizeValue = 2;
        break;
      case "medium":
        sizeValue = 4;
        break;
      case "large":
        sizeValue = 8;
        break;
    }
    pizzas.map((val: any) => {
      if (val.value !== "") {
        count++;
      }
    });
    console.log();
    let total = (sizeValue + extras) * count;
    return total;
  };

  return (
    <div>
      <Box sx={{ flexGrow: 1, alignItems: "center" }}>
        <Grid justifyContent="center" alignItems="center" container spacing={2}>
          <Grid item xs={8}>
            <Item>
              <h1>CART ITEMS</h1>
              {cartItems.length > 0
                ? cartItems[0].pizzas.map((val: any) => {
                    return (
                      <div>
                        {val.value ? (
                          <Card sx={{ display: "flex" }}>
                            <CardMedia
                              component="img"
                              sx={{ width: 250, height: 180 }}
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
                                  {cartItems[0].extras.map((value: any) => {
                                    return `${value}, `;
                                  })}
                                </Typography>
                              </CardContent>
                            </Box>
                          </Card>
                        ) : null}
                        <br />
                      </div>
                    );
                  })
                : "Loading"}
              <h2> TOTAL : $ {total} </h2>
              <Button
                disabled={cartItems[0].pizzas.length === 0}
                variant="contained"
                onClick={() => handleBuyItems()}
              >
                Buy Items
              </Button>
            </Item>
          </Grid>
        </Grid>
      </Box>
      <Confetti run={confettiStatus} width={width} height={height} />
    </div>
  );
};

export default Cart;
