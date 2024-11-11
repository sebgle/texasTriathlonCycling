import React from "react";
import Navbar from "./components/navbar";
import Cover from "./components/cover";
import Banner from "./components/banner";
import Card from "./components/card";
import pogiImage from "./assets/pgoi2.jpg";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Cover backgroundType="image" backgroundSrc={pogiImage}></Cover>
      <Banner text="Join Us" />
    </div>
  );
}

export default App;
