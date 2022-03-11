import React from "react";
import { Route, Routes } from "react-router-dom";

import { Container } from "@mui/material";

import { Header } from "./components/Header";

import { Home } from "./pages/Home";
import { Index } from "./pages/FullPhoto";

function App() {
  return (
    <div className="App">
      <Container maxWidth="lg">
        <Header />
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/home/photo/:id" element={<Index />} />
        </Routes>
      </Container>
    </div>
  );
}

export default App;
