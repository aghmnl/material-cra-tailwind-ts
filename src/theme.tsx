import { createTheme } from "@mui/material/styles";

export const rootElement = document.getElementById("root");

declare module "@mui/material/styles/createPalette" {
  interface Palette {
    emerald: PaletteColor;
    indigo: PaletteColor;
  }

  interface PaletteOptions {
    emerald?: PaletteColorOptions;
    indigo?: PaletteColorOptions;
  }
}

declare module "@mui/material/Button" {
  interface ButtonPropsColorOverrides {
    emerald: true;
    indigo: true;
  }
}

export const theme = createTheme({
  palette: {
    emerald: {
      main: "#047857", // Tailwind Emerald 700
      light: "#34d399", // Tailwind Emerald 400
      dark: "#064e3b", // Tailwind Emerald 900
      contrastText: "#a7f3d0", // Tailwind Emerald 200
    },
    indigo: {
      main: "#4338ca", // Tailwind Indigo 700
      light: "#818cf8", // Tailwind Indigo 400
      dark: "#312e81", // Tailwind Indigo 900
      contrastText: "#c7d2fe", // Tailwind Indigo 200
    },
  },
});
