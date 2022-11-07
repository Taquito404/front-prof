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
    <>
      {/* <img src={logo} className="App-logo" alt="logo" />
     <p>
       Edit <code>src/App.js</code> and save to reload.
     </p>
     <a
       className="App-link"
       href="https://reactjs.org"
       target="_blank"
       rel="noopener noreferrer"
     >
       Learn React
     </a> */}
      <NavBar />
      <Landing />
      <Content />
      <Vacation />
      <Review />
    </>
  );
}

export default App;
