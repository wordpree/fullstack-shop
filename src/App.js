import React from "react";
import { Route, Routes } from "react-router-dom";
import { Home, About, Shop, Contact } from "./pages";
import Nav from "./components/Nav";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { Container, CssBaseline } from "@mui/material";
const theme = createTheme({
  palette: {
    secondary: {
      main: "#5F6C37",
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
      <Container maxWidth="lg" sx={{ position: "relative" }}>
        <Nav />
        <Routes className="App">
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Container>
    </ThemeProvider>
  );
}

export default App;
