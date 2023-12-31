import React from "react";
import Splash from "./components/splashscreen/Splash";
import SignIn from "./components/signin/SignIn";
import LoginIn from "./components/loginin/LoginIn";
import SignUp from "./components/signup/SignUp";
import Chat from "./components/chat/Chat";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.module.scss";

export default function App() {
  return (
    <>
      <div>
        <Splash>
          <Router>
            <Routes>
              <Route path="/" element={<SignIn />} />
              <Route path="/login" element={<LoginIn />} />
              <Route path="/signup" element={<SignUp />} />
              <Route path="/chat" element={<Chat/>} />
            </Routes>
          </Router>
        </Splash>
      </div>
    </>
  );
}
