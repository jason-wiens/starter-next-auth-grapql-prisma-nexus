import { grey, red } from "@mui/material/colors";
import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: grey[800],
    },
    secondary: {
      main: grey[900],
    },
    error: {
      main: red.A400,
    },
  },
});

export default theme;
