import { createMuiTheme } from "@material-ui/core/styles";
import { lime, brown } from "@material-ui/core/colors";

// A custom theme for this app
const theme = createMuiTheme({
  palette: { type: "dark", primary: brown, secondary: lime }
});

export default theme;
