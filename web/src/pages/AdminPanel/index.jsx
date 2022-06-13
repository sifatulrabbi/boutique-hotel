import React from "react";
import {Routes, Route} from "react-router-dom";
import Dashboard from "./Dashboard";
import Rooms from "./Rooms";
import Requests from "./Requests";
import Reservations from "./Reservations";

const AdminPanel = () => {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/rooms" element={<Rooms />} />
      <Route path="/requests" element={<Requests />} />
      <Route path="/reservations" element={<Reservations />} />
    </Routes>
  );
};

export default AdminPanel;
