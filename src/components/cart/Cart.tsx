import React, { useState, useEffect } from "react";
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
import Typography from "@mui/material/Typography";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(4),
  textAlign: "center",
  //   color: theme.palette.text.secondary,
}));

const Cart = () => {
  const location: any = useLocation();
  const theme = useTheme();

  const [total, setTotal] = useState(0);

  useEffect(() => {
    setTotal(
      calculateTotal(
        location.state.pizzas,
        location.state.size,
        location.state.extras.length
      )
    );
  }, []);

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
              {location.state.pizzas
                ? location.state.pizzas.map((val: any) => {
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
                                  {location.state.extras.map((value: any) => {
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
                variant="contained"
                // onClick={() =>
                //   navigate("/dashboard/cart", {
                //     state: {
                //       size: pizzaSize,
                //       pizzas: [selectVeg, selectNonVeg],
                //       extras: toppings,
                //     },
                //   })
                // }
              >
                Buy Items
              </Button>
            </Item>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};

export default Cart;
