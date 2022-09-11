import './App.css';
import React from 'react'
//import DataFetching from "./components/data-fetching"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../src/components/data-fetching"
import User from "./pages/user-details"

function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route exactpath="/user/:id" element={<User/>}/>
        </Routes>
    </BrowserRouter>
  );
}

export default App;