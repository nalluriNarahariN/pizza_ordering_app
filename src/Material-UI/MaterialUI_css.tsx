import { makeStyles } from "@mui/styles";
import { Theme } from "@mui/system";

// const useStyles = makeStyles((theme: any) => ({
//   Appbar: {
//     backgroundColor: "white !important",
//     position: "relative !important",
//   },
//   AppBar_toolbar: { display: "flex", justifyContent: "space-between" },
//   Login_box: {
//     display: "flex",
//     flexDirection: "column",
//     height: "100%",
//     justifyContent: "center",
//   },
//   Home_root: {
//     // background: `linear-gradient(rgb(158, 115, 191,0.45),rgb(158, 115, 191,0.45)),url(${retailMV}) !important`,
//     backgroundRepeat: "no-repeat !important",
//     backgroundSize: "cover !important",
//     width: "100vw !important",
//     flexFlow: "column",
//     height: "100vh",
//   },
//   Login_root: {
//     backgroundColor: theme.palette.background.dark,
//     paddingBottom: theme.spacing(3),
//     paddingTop: theme.spacing(0),
//     textAlign: "center",
//     position: "relative",
//     // backgroundImage:
//     //   "linear-gradient(to right, #000098, #151c95, #262d90, #343b89, #424781) !important",
//     // background: `linear-gradient(rgb(158, 115, 191,0.45),rgb(158, 115, 191,0.45)),url(${retailMV}) !important`,
//     backgroundRepeat: "no-repeat !important",
//     backgroundSize: "cover !important",
//     width: "100vw !important",
//     display: "flex",
//     flexFlow: "column",
//     height: "93vh",
//     overflow: "hidden",
//   },
//   Register_root: {
//     backgroundColor: theme.palette.background.dark,
//     paddingBottom: theme.spacing(3),
//     paddingTop: theme.spacing(0),
//     // textAlign: "center",
//     position: "relative",
//     backgroundImage:
//       "linear-gradient(to right, #000098, #151c95, #262d90, #343b89, #424781) !important",
//     display: "flex",
//     flexFlow: "column",
//     height: "125vh",
//     overflow: "hidden",
//   },
//   ForgotPassword_root: {
//     backgroundColor: theme.palette.background.dark,
//     paddingBottom: theme.spacing(3),
//     paddingTop: theme.spacing(0),
//     textAlign: "center",
//     position: "relative",
//     backgroundImage:
//       "linear-gradient(to right top, #000098, #1517a8, #2328b9, #2e38c9, #3947da, #704bd9, #9352d7, #b05ad5, #d562c1, #eb73b1, #f689a7, #f9a1a6)",
//     display: "flex",
//     flexFlow: "column",
//     height: "100vh",
//     overflow: "hidden",
//   },

//   Login_paper: {
//     padding: 20,
//     borderRadius: 15,
//   },
//   Login_waves: {
//     position: "absolute",
//     top: 0,
//     left: 0,
//     width: "100%",
//     overflow: "hidden",
//     lineHeight: 0,
//     zIndex: 10,
//   },
//   Login_waves_svg: {
//     position: "relative",
//     display: "block",
//     width: "calc(135% + 1.3px)",
//     height: 90,
//   },
//   shapeFill: {
//     fill: "#FFFFFF",
//   },
//   backG: {
//     backgroundImage:
//       "linear-gradient(to right, #000098, #151c95, #262d90, #343b89, #424781) !important",
//   },
//   inputCenter: {
//     textAlign: "center",
//     color: "red",
//   },
//   Dashboard_root: {
//     backgroundColor: "#e9ecef",
//     // display: "flex",
//     height: "100%",
//     overflow: "hidden",
//     width: "100%",
//   },
//   Dashboard_wrapper: {
//     // display: "flex",
//     // flex: "1 1 1",
//     overflow: "hidden",
//     paddingTop: 64,
//     [theme.breakpoints.up("lg")]: {
//       paddingLeft: 256,
//     },
//   },
//   Dashboard_contentContainer: {
//     overflow: "hidden",
//   },
//   Dashboard_content: {
//     // display: "grid",
//     // flex: "1 1 1",
//     // gridTemplateColumns: "1fr 1fr 1fr",
//     // flex: "1 1 1",
//     height: "100%",
//     overflow: "auto",
//   },
//   Dashboard_paper: {
//     padding: 40,
//     display: "flex",
//     flexDirection: "column",
//   },
//   Navbar_nestedroot: {
//     width: "100%",
//     maxWidth: 280,
//     color: "#FFFFFF",
//     backgroundColor: "#404040",
//   },
//   Navbar_nested: {
//     paddingLeft: theme.spacing(4),
//   },
//   List_selected: {
//     backgroundColor: "rgba(255, 255, 255, .15) !important",
//   },
//   Navbar_mobileDrawer: {
//     width: 256,
//   },
//   Navbar_desktopDrawer: {
//     width: 256,
//     top: 64,
//     height: "calc(100% - 64px)",
//     backgroundColor: "#404040",
//   },
//   Topbar_Appbar: {
//     backgroundImage:
//       "linear-gradient(to right, #000098, #1a1998, #2a2997, #373696, #434393) !important",
//     height: 64,
//   },
//   Topbar_logo: {
//     height: 64,
//     maxWidth: 256,
//     position: "relative",
//     left: 0,
//   },
//   FormCard_root: {
//     Height: "350px !important",
//     maxWidth: 300,
//   },
//   FormCard_image: {
//     maxWidth: "90%",
//     height: "70",
//   },
//   FormCard_media: {},
//   PreviewCard: {
//     position: "relative",
//     width: 320,
//     height: 400,
//   },
//   PreviewCard_content: {
//     display: "flex",
//     flexDirection: "column",
//     justifyContent: "center",
//   },
//   Preview_cards_Container: {
//     position: "relative",
//     display: "grid",
//     gridTemplateColumns: "1fr 1fr 1fr ",
//     gridGap: 20,
//     marginBottom: 5,
//   },
//   success: {
//     backgroundColor: "#28a745",
//   },
//   warning: {
//     backgroundColor: "#ffc107",
//   },
//   danger: {
//     backgroundColor: "#dc3545",
//   },
//   myCustomers_table: {
//     marginTop: 110,
//     margin: 30,
//   },
//   formBox: {
//     paddingBottom: "20px !important",
//   },
//   dashboard_root: {
//     // backgroundColor: theme.palette.background.dark,
//     // paddingBottom: theme.spacing(3),
//     // paddingTop: theme.spacing(0),
//     // textAlign: "center",
//     // position: "relative",
//     // backgroundImage:
//     //   "linear-gradient(to right, #000098, #151c95, #262d90, #343b89, #424781) !important",
//     // background: `linear-gradient(rgb(158, 115, 191,0.45),rgb(158, 115, 191,0.45)),url(${retailMV}) !important`,
//     backgroundRepeat: "no-repeat !important",
//     backgroundSize: "cover !important",
//     width: "100vw !important",
//     display: "flex",
//     flexFlow: "column",
//     height: "110vh",
//     overflow: "hidden",
//   },
// }));

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
    height: "93vh",
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
    padding: 20,
    borderRadius: 15,
  },
});

export default useStyles;
