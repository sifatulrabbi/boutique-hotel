// Dependencies
import React, {Suspense} from "react";
import {useFetchData, useAuth} from "./hooks";
import recoil from "recoil";
import {authState} from "./atoms";
// Components
import {Routes, Route} from "react-router-dom";
import Rooms from "./pages/Rooms";
import Reservations from "./pages/Reservations";
import Requests from "./pages/Requests";
import SidePanel from "./modules/SidePanel";

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
        <div className="w-full h-screen flex flex-col justify-center items-center gap-6">
          <h4 className="text-xl md:text-2xl font-extrabold text-textPrimary">
            Boutique Hotel admin panel
          </h4>

          <form
            className="w-full max-w-md flex flex-col gap-6 bg-white p-5 rounded-3xl"
            onSubmit={handleLogin}
          >
            <div className="w-full flex flex-col gap-2">
              <label
                htmlFor="email"
                className="text-textPrimary font-extrabold"
              >
                Email
              </label>
              <input
                type="email"
                placeholder="admin@bh.com"
                required
                value={email}
                onChange={(e) => setEmail(e.currentTarget.value)}
                className="w-full rounded-xl text-textPrimary px-4 py-3 outline-none bg-white border-[1px] focus:border-primary-400"
              />
            </div>
            <div className="w-full flex flex-col gap-2">
              <label
                htmlFor="password"
                className="text-textPrimary font-extrabold"
              >
                Password
              </label>
              <input
                type="password"
                placeholder="bh.admin"
                required
                value={password}
                onChange={(e) => setPassword(e.currentTarget.value)}
                className="w-full rounded-xl text-textPrimary px-4 py-3 outline-none bg-white border-[1px] focus:border-primary-400"
              />
            </div>
            <button type="submit" className="btn-primary w-full">
              Login
            </button>
          </form>
        </div>
      )}
    </Suspense>
  );
};

export default App;
