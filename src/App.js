import React from "react";
import { Route, Routes } from "react-router-dom";
import { Home, About, Shop, Contact, Product } from "./pages";
import Nav from "./components/Nav";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";
const theme = createTheme({
  palette: {
    secondary: {
      main: "#5F6C37",
    },
    orange: {
      main: "#EAA34D",
      contrastText: "#fff",
      dark: "#AC7635",
    },
  },
  // typography: {
  //   fontFamily: ["Abril Fatface", "cursive", "Arial", "sans-serif"].join(","),
  // },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Nav />
      <Routes className="App">
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/shop/:productId" element={<Product />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
