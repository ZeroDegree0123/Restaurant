import "./App.css";
import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { getUser } from "../../utilities/users-service";
import Auth from "../AuthPage/AuthPage";
import NewOrder from "../NewOrderPage/NewOrderPage";
import OrderHistory from "../OrderHistoryPage/OrderHistoryPage";
import NavBar from "../../Components/NavBar/NavBar";
import Footer from "../../Components/Footer/Footer";
import Menu from "../MenuPage/MenuPage";
import Home from "../HomePage/HomePage";
import Rewards from "../RewardsPage/RewardsPage";
import About from "../AboutPage/AboutPage";
import Careers from "../CareersPage/CareersPage";


export default function App() {
  const [user, setUser] = useState(getUser());
  return (
    <main className="App">
      {user ? (
        <>
          <NavBar user={user} setUser={setUser} />
          <Routes>
            {/* route components in here */}
            <Route path="/orders/new" element={<NewOrder />} />
            <Route path="/orders" element={<OrderHistory />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/" element={<Home />} />
            <Route path="/rewards" element={<Rewards />} />
            <Route path="/about" element={<About />} />
            <Route path="/careers" element={<Careers />} />
          </Routes>
          <Footer/>
        </>
      ) : (
        <Auth path="/login" setUser={setUser} />
      )}
    </main>
  );
}
