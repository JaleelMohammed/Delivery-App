import React, { useState } from "react";
import Navber from "./components/Navber/Navber";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Cart from "./pages/Cart/Cart";
import PlaceOrder from "./pages/PlaceOrder/PlaceOrder";
import Footer from "./components/Footer/Footer";
import LoginPopup from "./components/LoginPopup/LoginPopup";
const App = () => {
  const[Showlogin,setShowLogin] = useState(false)
  return (
    <>
    {Showlogin?<LoginPopup setShowLogin={setShowLogin}/>:<></>}
      <div className="app">
        <Navber  setShowLogin={setShowLogin}/>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/Cart" element={<Cart />}></Route>
          <Route path="/order" element={<PlaceOrder/>}></Route>
        </Routes>
      </div>
      <Footer />
    </>
  );
};

export default App;
