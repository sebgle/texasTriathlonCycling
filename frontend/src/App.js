import "./App.css";
import Navbar from "./components/navbar";
import Cover from "./components/cover";
import Card from "./components/card";
import Banner from "./components/banner";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Cover />
      <Banner text="Join Us" />
      <Card />
    </div>
  );
}

export default App;
