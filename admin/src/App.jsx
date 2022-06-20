// Dependencies
import React, {Suspense} from "react";
// Components
import {Routes, Route} from "react-router-dom";
import Rooms from "./pages/Rooms";
import Reservations from "./pages/Reservations";
import Requests from "./pages/Requests";
import SidePanel from "./modules/SidePanel";
// States
import recoil from "recoil";
import {roomsState, fetchRoomsState} from "./atoms";

const App = () => {
  const fetchRoom = recoil.useRecoilValue(fetchRoomsState);
  const setRooms = recoil.useSetRecoilState(roomsState);

  /**
   * Update the rooms on page load
   */
  React.useEffect(() => {
    setRooms(fetchRoom);
  }, [fetchRoom, setRooms]);

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
