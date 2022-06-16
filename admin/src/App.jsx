import React from "react";
import {Routes, Route} from "react-router-dom";
import Client from "./pages/Client";
import Reservations from "./pages/Reservations";
import Requests from "./pages/Requests";
import SidePanel from "./modules/SidePanel";

const App = () => {
  return (
    <>
      <SidePanel />
      <Routes>
        <Route path="/" element={<Requests />} />
        <Route path="/reservations" element={<Reservations />} />
        <Route path="/rooms" element={<Client />} />
      </Routes>
    </>
  );
};

export default App;
