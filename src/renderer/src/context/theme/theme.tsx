import { ThemeProvider } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import { ReactNode } from "react";

const theme = createTheme({
  palette: {
    primary: { main: "#26C485" },
    secondary: { main: "#553A41" },
  },
});

interface Props {
  children: ReactNode;
}

export default function AppThemeProvider(props: Props) {
  return <ThemeProvider theme={theme}>{props.children}</ThemeProvider>;
}
