// Dependencies
import React, {Suspense} from "react";
import {useFetchData, useAuth} from "./hooks";
// Components
import {Routes, Route} from "react-router-dom";
import Rooms from "./pages/Rooms";
import Reservations from "./pages/Reservations";
import Requests from "./pages/Requests";
import SidePanel from "./modules/SidePanel";
// States
import recoil from "recoil";
import {authState} from "./atoms";
import FormWrapper from "./components/FormWrapper";
import InputGroup from "./components/FormGroups/InputGroup";

const App = () => {
  const auth = recoil.useRecoilValue(authState);

  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  const {getAllData} = useFetchData();
  const {checkAuthState, login} = useAuth();

  /**
   * Update the rooms on page load
   */
  React.useEffect(() => {
    getAllData();
  }, [getAllData]);

  /**
   * Check for login state
   */
  React.useEffect(() => {
    checkAuthState();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function handleLogin(e) {
    e.preventDefault();

    login(email, password);
    setEmail("");
    setPassword("");
  }

  return (
    <Suspense fallback={<div>Loading...</div>}>
      {auth.isLoggedIn ? (
        <>
          <SidePanel />
          <Routes>
            <Route path="/" element={<Requests />} />
            <Route path="/reservations" element={<Reservations />} />
            <Route path="/rooms" element={<Rooms />} />
          </Routes>
        </>
      ) : (
        // Login screen
        <div className="w-full h-screen flex flex-col justify-center items-center gap-6">
          <h4 className="text-xl md:text-2xl font-extrabold text-textPrimary">
            Boutique Hotel admin panel
          </h4>

          <FormWrapper
            className="p-5 rounded-xl max-w-[90vw] md:max-w-md"
            onSubmit={handleLogin}
          >
            <InputGroup
              label="Email"
              type="email"
              placeholder="admin@bh.com"
              required
              value={email}
              onChange={(e) => setEmail(e.currentTarget.value)}
            />
            <InputGroup
              label="Password"
              type="password"
              placeholder="bh.admin"
              required
              value={password}
              onChange={(e) => setPassword(e.currentTarget.value)}
            />
            <button type="submit" className="btn-primary w-full">
              Login
            </button>
          </FormWrapper>
        </div>
      )}
    </Suspense>
  );
};

export default App;
