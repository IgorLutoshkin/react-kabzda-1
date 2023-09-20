import React from "react";
// import logo from "./logo.svg";
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <header className="head">
        <img
          className="logo"
          src="https://avatars.mds.yandex.net/i?id=8e1aedaa38797584b4eb74dff9acca33_l-8348888-images-thumbs&n=13"
          alt=""
        />
      </header>
      <nav className="nav">
        <ul className="nav-list">
          <li className="item">Profile</li>
          <li className="item">Message</li>
          <li className="item">News</li>
          <li className="item">Music</li>
          <li className="item">Settings</li>
        </ul>
      </nav>
      <section className="section">
        <div className="main-img-wrap">
          <img
            className="main-img"
            src="https://avatars.mds.yandex.net/i?id=1e5897885d020d6ea081d4cddc7a02d9_l-4883843-images-thumbs&n=13"
            alt="moto"
          />
        </div>

        <div className="info">
          <img
            className="avatar"
            src="https://avatars.mds.yandex.net/i?id=b49aa8f64149767653bed6d71b9365c6_l-4935356-images-thumbs&n=13"
            alt=""
          />
          <p className="description"></p>
        </div>
        <div className="my-post">
          <input className="input_my-post" type="text" />
        </div>
        <div className="post">
          <p className="text-post">Post-1</p>
          <p className="text-post">Post-2</p>
        </div>
      </section>
    </div>
  );
};

export default App;
