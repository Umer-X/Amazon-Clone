import React, { useEffect } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./Home/Home";
import App from "./App";
import Login from "./Login/Login.js";
import Checkout from "./Checkout/Checkout";
import { StateProvider, useStateValue } from "./StateProvider";
import reducer, { initialState } from "./reducer.js";
import { auth } from './firebaseConfig.js';

const MainRouter = () => {
  const [{ user }, dispatch] = useStateValue();

  useEffect(() => {
     auth.onAuthStateChanged (authUser => {
      console.log('The User is', authUser);

      if (authUser) {
        dispatch({
          type: 'SET_USER',
          user: authUser
        });
      } else {
        dispatch({
          type: 'SET_USER',
          user: null
        });
      }
    });

  },[]);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="" element={<Home />} />
          <Route path="checkout" element={<Checkout />} />
        </Route>
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <StateProvider initialState={initialState} reducer={reducer}>
      <MainRouter />
    </StateProvider>
  </React.StrictMode>
);

reportWebVitals();
