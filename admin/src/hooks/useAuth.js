import recoil from "recoil";
import {authState} from "../atoms";

const LOCAL_KEY = "boutiqueHotelAdminLoginState";

export function useAuth() {
  const setAuth = recoil.useSetRecoilState(authState);

  function login(email, password) {
    if (email !== "admin@bh.com" || password !== "bh.admin") {
      return;
    }

    setAuth({isLoggedIn: true});
    localStorage.setItem(LOCAL_KEY, JSON.stringify({isLoggedIn: true}));
  }

  function logout() {
    setAuth({isLoggedIn: false});
    localStorage.removeItem(LOCAL_KEY);
  }

  function checkAuthState() {
    const authState = localStorage.getItem(LOCAL_KEY);

    if (authState) {
      const localState = JSON.parse(authState);
      console.log(localState);

      if (localState.isLoggedIn) {
        setAuth({isLoggedIn: true});
        return;
      }
    }

    setAuth({isLoggedIn: false});
  }

  return {
    login,
    logout,
    checkAuthState,
  };
}
