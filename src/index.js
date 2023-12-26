import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

const postArr = [
  { id: 1, message: "My first post!!!", like: 15 },
  { id: 2, message: "Favorite post!", like: 11 },
  { id: 3, message: "Post our me!", like: 23 },
];

const dialogArr = [
  { id: 1, name: "Dimych" },
  { id: 2, name: "Sveta" },
  { id: 3, name: "Victor" },
  { id: 4, name: "Valera" },
  { id: 5, name: "Andrey" },
];

const messageArr = [
  { id: 1, message: "Hello!" },
  { id: 2, message: "Hello! How are you?" },
  { id: 3, message: "Good!" },
  { id: 4, message: "YO)" },
  { id: 5, message: "Respect!" },
];

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App postArr={postArr} dialogArr={dialogArr} messageArr={messageArr} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
