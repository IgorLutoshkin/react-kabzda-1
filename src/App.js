import React from "react";
// import logo from "./logo.svg";
import "./App.css";
import Header from "./Components/Header/Header";
import Navbar from "./Components/Navbar/Navbar";
import Profile from "./Components/Profile/Profile";
import Dialogs from "./Components/Dialogs/Dialogs";

const App = () => {
  return <div className="App">
    <Header />
    <Navbar />
    <div class="app-wrap">
      <Dialogs />
    </div>
    {/* <Profile/> */}
  </div>;

};

export default App;
