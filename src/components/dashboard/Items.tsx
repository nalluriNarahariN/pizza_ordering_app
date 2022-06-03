import { Box, Paper, styled } from "@mui/material";
import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import pizza from "../../Assets/pizza.svg";
import Grid from "@mui/material/Grid";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import OutlinedInput from "@mui/material/OutlinedInput";
import ListItemText from "@mui/material/ListItemText";
import Checkbox from "@mui/material/Checkbox";
import { useNavigate } from "react-router-dom";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const Extras = [
  "Grilled Mushroom",
  "Crisp Capsicum",
  "Fresh Tomato",
  "Jalapeno",
  "Golden Corn",
  "Chicken Tikka",
  "Chicken Pepperoni",
  "Black Olives",
  "Onion",
];

const Items = () => {
  const navigate = useNavigate();
  const [pizzaSize, setPizzaSize] = React.useState("small");
  const [selectVeg, setSelectVeg] = React.useState({
    value: "",
    description: "Please select a pizza to continue",
    img: "",
  });
  const [selectNonVeg, setSelectNonVeg] = React.useState({
    value: "",
    description: "Please select a pizza to continue",
    img: "",
  });

  const [toppings, setToppings] = React.useState<string[]>([]);

  const [total, setTotal] = React.useState(0);

  const handleChangeToppings = (event: SelectChangeEvent<typeof toppings>) => {
    const {
      target: { value },
    } = event;
    setToppings(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
  };

  const handleChangeSelect = (event: SelectChangeEvent) => {
    let obj = selectVegJson.find((o) => o.value === event.target.value);
    setSelectVeg({
      description: obj?.description || "",
      value: event.target.value as string,
      img: obj?.img || "",
    });
  };

  const handleChangeSelectNonVeg = (event: SelectChangeEvent) => {
    let obj = selectNonVegJson.find((o) => o.value === event.target.value);
    setSelectNonVeg({
      description: obj?.description || "",
      value: event.target.value as string,
      img: obj?.img || "",
    });
  };

  const handleChange = (
    event: React.MouseEvent<HTMLElement>,
    newAlignment: string
  ) => {
    setPizzaSize(newAlignment);
  };

  const selectVegJson = [
    {
      value: "Margherita",
      description: "Classic delight with 100% real mozzarella cheese",
      img: "https://images.dominos.co.in/new_margherita_2502.jpg",
    },
    {
      value: "Veg Extravaganza",
      description:
        "Black olives, capsicum, onion, grilled mushroom, corn, tomato, jalapeno & extra cheese",
      img: "https://images.dominos.co.in/new_veg_extravaganza.jpg",
    },
    {
      value: "Peppy Paneer",
      description:
        "Flavorful trio of juicy paneer, crisp capsicum with spicy red paprika",
      img: "https://images.dominos.co.in/new_peppy_paneer.jpg",
    },
    {
      value: "Farmhouse",
      description:
        "Delightful combination of onion, capsicum, tomato & grilled mushroom",
      img: "https://images.dominos.co.in/farmhouse.png",
    },
  ];

  const selectNonVegJson = [
    {
      value: "Chicken Dominator",
      description:
        "Loaded with double pepper barbecue chicken, peri-peri chicken, chicken tikka & grilled chicken rashers",
      img: "https://images.dominos.co.in/new_chicken_dominator.jpg",
    },
    {
      value: "Chicken Maximus",
      description:
        "Loaded to the Max with Chicken Tikka, Chicken Keema, Chicken Sausage and a double dose of grilled Chicken Rashers.",
      img: "https://images.dominos.co.in/PIZ5158_1.jpg",
    },
    {
      value: "Chicken Pepperoni",
      description:
        "A classic American taste! Relish the delectable flavor of Chicken Pepperoni, topped with extra cheese",
      img: "https://images.dominos.co.in/cheesepepperoni.png",
    },
    {
      value: "Pepper Barbecue Chicken",
      description: "Pepper barbecue chicken for that extra zing",
      img: "https://images.dominos.co.in/new_pepper_barbeque_chicken.jpg",
    },
  ];

  return (
    <div>
      <Box sx={{ width: 1 }}>
        <Box display="grid" gap={4}>
          <Box gridColumn="span 12">
            <Grid container spacing={2}>
              <ToggleButtonGroup
                color="primary"
                value={pizzaSize}
                exclusive
                fullWidth
                onChange={handleChange}
              >
                <ToggleButton
                  color="success"
                  fullWidth
                  size="large"
                  value="small"
                >
                  <Grid sx={{ paddingTop: 5 }} item xs={9}>
                    <Card
                      sx={{
                        display: "flex",
                        justifyContent: "space-around",
                        padding: 2,
                      }}
                    >
                      <Box
                        sx={{
                          display: "flex",
                          flexDirection: "column",
                        }}
                      >
                        <CardContent>
                          <Typography component="div" variant="h5">
                            Small
                          </Typography>
                          <Typography
                            variant="subtitle1"
                            color="text.secondary"
                            component="div"
                            sx={{ display: "flex", alignItems: "center" }}
                          >
                            $2
                          </Typography>
                        </CardContent>
                      </Box>
                      <CardMedia
                        component="img"
                        sx={{ width: 151 }}
                        image={pizza}
                        alt="Live from space album cover"
                      />
                    </Card>
                  </Grid>
                </ToggleButton>
                <ToggleButton
                  color="success"
                  size="large"
                  fullWidth
                  value="medium"
                >
                  <Grid sx={{ paddingTop: 5 }} item xs={9}>
                    <Card sx={{ display: "flex" }}>
                      <Box sx={{ display: "flex", flexDirection: "column" }}>
                        <CardContent sx={{ flex: "1 0 auto" }}>
                          <Typography component="div" variant="h5">
                            Medium
                          </Typography>
                          <Typography
                            variant="subtitle1"
                            color="text.secondary"
                            component="div"
                            sx={{ display: "flex", alignItems: "center" }}
                          >
                            $4
                          </Typography>
                        </CardContent>
                      </Box>
                      <CardMedia
                        component="img"
                        sx={{ width: 180 }}
                        image={pizza}
                        alt="Live from space album cover"
                      />
                    </Card>
                  </Grid>
                </ToggleButton>
                <ToggleButton
                  color="success"
                  size="large"
                  fullWidth
                  value="large"
                >
                  <Grid sx={{ paddingTop: 5 }} item xs={9}>
                    <Card sx={{ display: "flex" }}>
                      <Box sx={{ display: "flex", flexDirection: "column" }}>
                        <CardContent sx={{ flex: "1 0 auto" }}>
                          <Typography component="div" variant="h5">
                            Large
                          </Typography>
                          <Typography
                            variant="subtitle1"
                            color="text.secondary"
                            component="div"
                            sx={{ display: "flex", alignItems: "center" }}
                          >
                            $8
                          </Typography>
                        </CardContent>
                      </Box>
                      <CardMedia
                        component="img"
                        sx={{ width: 200 }}
                        image={pizza}
                        alt="Live from space album cover"
                      />
                    </Card>
                  </Grid>
                </ToggleButton>
              </ToggleButtonGroup>
            </Grid>
          </Box>
          <Box gridColumn="span 12">
            <Grid container spacing={2}>
              <Grid item xs={4}>
                <Item>
                  <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">Veg</InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      value={selectVeg.value}
                      label="Veg"
                      onChange={handleChangeSelect}
                    >
                      {selectVegJson.map((val) => {
                        return (
                          <MenuItem value={val.value}>{val.value}</MenuItem>
                        );
                      })}
                    </Select>
                  </FormControl>
                  {selectVeg.img ? (
                    <Box
                      component="img"
                      sx={{
                        height: 250,
                        width: 400,
                        paddingTop: 2,
                        borderRadius: 8,
                      }}
                      src={selectVeg.img}
                      alt="pizzzaaaa"
                    />
                  ) : null}

                  <h2>{selectVeg.description}</h2>
                </Item>
              </Grid>
              <Grid item xs={4}>
                <Item>
                  <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">
                      Non-Veg
                    </InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      value={selectNonVeg.value}
                      label="Non-Veg"
                      onChange={handleChangeSelectNonVeg}
                    >
                      {selectNonVegJson.map((val) => {
                        return (
                          <MenuItem value={val.value}>{val.value}</MenuItem>
                        );
                      })}
                    </Select>
                  </FormControl>
                  {selectNonVeg.img ? (
                    <Box
                      component="img"
                      sx={{
                        height: 250,
                        width: 400,
                        paddingTop: 2,
                        borderRadius: 8,
                      }}
                      src={selectNonVeg.img}
                      alt="pizzzaaaa"
                    />
                  ) : null}

                  <h2>{selectNonVeg.description}</h2>
                </Item>
              </Grid>
              <Grid item xs={4}>
                <Item>
                  <FormControl
                    disabled={
                      selectVeg.value === "" && selectNonVeg.value === ""
                    }
                    fullWidth
                  >
                    <InputLabel id="demo-multiple-checkbox-label">
                      Extra Toppings
                    </InputLabel>
                    <Select
                      labelId="demo-multiple-checkbox-label"
                      id="demo-multiple-checkbox"
                      multiple
                      value={toppings}
                      onChange={handleChangeToppings}
                      input={<OutlinedInput label="select toppings" />}
                      renderValue={(selected) => selected.join(", ")}
                      MenuProps={MenuProps}
                    >
                      {Extras.map((name) => (
                        <MenuItem key={name} value={name}>
                          <Checkbox checked={toppings.indexOf(name) > -1} />
                          <ListItemText primary={name} />
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                  <h2>
                    <ul>
                      {toppings.map((val) => {
                        return <li>{val}</li>;
                      })}
                    </ul>
                  </h2>
                  Extra Toppings : $1 each
                </Item>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Button
          disabled={
            (selectVeg.value === "" && selectNonVeg.value === "") ||
            pizzaSize === null
          }
          sx={{ marginLeft: 2, marginTop: 5 }}
          variant="outlined"
          onClick={() =>
            navigate("/dashboard/cart", {
              state: {
                size: pizzaSize,
                veg: selectVeg,
                nonVeg: selectNonVeg,
                extras: toppings,
              },
            })
          }
        >
          Checkout
        </Button>
      </Box>
    </div>
  );
};

export default Items;
