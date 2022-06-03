import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#3f51b5",
    },
    secondary: {
      main: "#007bff",
    },
    success: {
      main: "#28a745",
    },
    warning: {
      main: "#ffc107",
    },
  },
});

export default theme;

// export default createTheme({
//   palette: {
//     common: {
//       blue: "",
//     },
//     primary: {
//       main: "#3f51b5",
//     },
//     secondary: {
//       main: "#007bff",
//     },
//     success: {
//       main: "#28a745",
//     },
//     warning: {
//       main: "#ffc107",
//     },
//     danger: {
//       main: "#dc3545",
//     },
//     delete: {
//       main: "#dc3545",
//     },
//   },
//   typography,
//   shadows,
// });
