import React from "react";
// import Head from "next/head";
import Splash from "./components/splashscreen/Splash";
import SignIn from "./components/signin/SignIn";
import LoginIn from "./components/loginin/LoginIn";
import SignUp from "./components/signup/SignUp";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.module.scss";

export default function App() {
  return (
    <>
      <div>
        {/* <Head>
          <title>Mokx</title>
        </Head> */}
        <Splash>
          <Router>
            <Routes>
              <Route path="/" element={<SignIn />} />
              <Route path="/login" element={<LoginIn />} />
              <Route path="/signup" element={<SignUp />} />
            </Routes>
          </Router>
        </Splash>
      </div>
    </>
  );
}
