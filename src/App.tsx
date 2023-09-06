import { createTheme, ThemeProvider } from "@mui/material";
import "./App.css";
import NavRouter from "./navigation/Nav";
import NavBar from "./navigation/NavBar";

function App() {
 
  const THEME = createTheme({
    typography: {
     "fontFamily": `"Roboto", "Helvetica", "Arial", sans-serif, "century-gothic", "Outfit"`,
    }
 });

  return (
    <>
    <ThemeProvider theme={THEME}>

      <NavRouter />
      <NavBar/>
    </ThemeProvider>
    </>
  );
}

export default App;
