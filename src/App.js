import "./App.scss";
import "./resources/fonts/fonts.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import NavBar from "./components/nav";
import Landing from "./components/landing";
import Content from "./components/content";
import Vacation from "./components/vacation";
import Review from "./components/review";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Landing />
      <Content />
      <Vacation />
      <Review />
    </div>
  );
}

export default App;
