import React from "react";
// import logo from "./logo.svg";
import "./App.css";
import Header from "./Components/Header/Header";
import Navbar from "./Components/Navbar/Navbar";
import Profile from "./Components/Profile/Profile";
import Dialogs from "./Components/Dialogs/Dialogs";
import News from "./Components/News/News";
import Music from "./Components/Music/Music";
import Setting from "./Components/Setting/Setting";

import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = (props) => {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Navbar />
        <div class="app-wrap">
          <Routes>
            <Route
              path="/dialogs/*"
              element={
                <Dialogs
                  dialogArr={props.dialogArr}
                  messageArr={props.messageArr}
                />
              }
            />
            <Route
              path="/profile"
              element={<Profile postArr={props.postArr} />}
            />
            <Route path="/news" element={<News />} />
            <Route path="/music" element={<Music />} />
            <Route path="/setting" element={<Setting />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
