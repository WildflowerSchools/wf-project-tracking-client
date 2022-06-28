import "./App.scss";

import * as React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import {Route, Routes} from "react-router-dom";

import LoginPage from "./pages/Login";
import Home from "./pages/Home";
import NavigationBar from "./components/NavigationBar";
import Loading from "./pages/Loading";

/**
 * Our Web Application
 */
export default function App() {
  const auth0 = useAuth0();

  const loadingScreen = (<Loading />);
  const routing = (
      <>
        <NavigationBar />
        <div className="m-2">
            <Routes>
                <Route path="/" element={auth0.isAuthenticated ? <Home /> : <LoginPage />} />
            </Routes>
        </div>
      </>
  )

  return (
    <div className="App">
        {auth0.isLoading ? loadingScreen : routing}
    </div>
  );
}
