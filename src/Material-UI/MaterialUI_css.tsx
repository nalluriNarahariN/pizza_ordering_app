import { makeStyles } from "@mui/styles";
import { Theme } from "@mui/system";

const useStyles = makeStyles({
  root: {
    background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
    border: 0,
    borderRadius: 3,
    boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
    color: "white",
    height: 48,
    padding: "0 30px",
  },
  Login_root: {
    // backgroundColor: theme.palette.background.dark,
    // paddingBottom: theme.spacing(3),
    // paddingTop: theme.spacing(0),
    textAlign: "center",
    position: "relative",
    // backgroundImage:
    //   "linear-gradient(to right, #000098, #151c95, #262d90, #343b89, #424781) !important",
    // background: `linear-gradient(rgb(158, 115, 191,0.45),rgb(158, 115, 191,0.45)),url(${retailMV}) !important`,
    backgroundRepeat: "no-repeat !important",
    backgroundSize: "cover !important",
    width: "100vw !important",
    display: "flex",
    flexFlow: "column",
    height: "100vh",
    overflow: "hidden",
  },
  Login_waves: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    overflow: "hidden",
    lineHeight: 0,
    zIndex: 10,
  },
  waves: {
    position: "relative",
    width: "100%",
    height: "15vh",
    marginBottom: "-7px" /*Fix for safari gap*/,
    minHeight: "100px",
    maxHeight: "150px",
  },
  Login_waves_svg: {
    position: "relative",
    display: "block",
    width: "calc(135% + 1.3px)",
    height: 90,
    zIndex: 13,
  },
  shapeFill: {
    fill: "#FFFFFF",
  },
  backG: {
    backgroundImage:
      "linear-gradient(to right, #000098, #151c95, #262d90, #343b89, #424781) !important",
  },
  inputCenter: {
    textAlign: "center",
    color: "red",
  },
  formBox: {
    paddingBottom: "20px !important",
  },
  Login_box: {
    display: "flex",
    flexDirection: "column",
    height: "100%",
    justifyContent: "center",
  },
  Login_paper: {
    // padding: 20,
    borderRadius: 15,
  },
});

export default useStyles;
