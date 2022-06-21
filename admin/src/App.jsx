// Dependencies
import React, {Suspense} from "react";
import {useFetchData} from "./hooks";
// Components
import {Routes, Route} from "react-router-dom";
import Rooms from "./pages/Rooms";
import Reservations from "./pages/Reservations";
import Requests from "./pages/Requests";
import SidePanel from "./modules/SidePanel";

const App = () => {
  const {getAllData} = useFetchData();

  /**
   * Update the rooms on page load
   */
  React.useEffect(() => {
    getAllData();
  }, [getAllData]);

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <SidePanel />
      <Routes>
        <Route path="/" element={<Requests />} />
        <Route path="/reservations" element={<Reservations />} />
        <Route path="/rooms" element={<Rooms />} />
      </Routes>
    </Suspense>
  );
};

export default App;
