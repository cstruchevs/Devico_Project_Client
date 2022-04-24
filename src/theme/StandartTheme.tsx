import { createTheme, ThemeProvider } from "@mui/material/styles";
import { FC } from "react";

const standartTheme = createTheme({
  palette: {
    primary: {
      main: "#5940B8",
      light: "#F4F6F0",
      dark: "#485550",
    },
    secondary: {
      main: "#C0EB6A",
    },
  },
});

interface StandartThemeProviderProps {
  children: JSX.Element[] | JSX.Element;
}

const StandartThemeProvider: FC<StandartThemeProviderProps> = ({
  children,
}) => {
  return <ThemeProvider theme={standartTheme}>{children}</ThemeProvider>;
};

export default StandartThemeProvider;
