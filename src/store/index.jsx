import { createTheme, ThemeProvider } from "@mui/material";
import { createContext, useMemo, useState } from "react";

export const ColorModeContext = createContext({
  toggleMode: () => {},
  mode: "light",
});

export const ColorContextProvider = ({ children }) => {
  const [mode, setMode] = useState("dark");
  const colorMode = useMemo(()=>({
    toggleColorMode: () => {
        setMode((prevMode) =>
          prevMode === 'light' ? 'dark' : 'light',
        );
      },mode,
  }),[mode])
  const theme = createTheme({
    palette: {
      mode: mode,
    },
  });
  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ColorModeContext.Provider>
  );
};
