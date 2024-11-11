import "./App.css";
import Navbar from "./components/navbar";
import Cover from "./components/cover";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Cover />
      <div style={{ padding: "20px" }}>
        <h2>About Us</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sit
          amet.
        </p>
        <p>Aliquam eget pharetra felis, nec vehicula odio...</p>

        <h2>Services</h2>
        <p>
          Praesent accumsan nulla ut turpis varius, eget dictum erat tempor...
        </p>
        <p>
          Nam aliquet mi vitae libero feugiat, vel bibendum metus aliquet...
        </p>

        <h2>Contact</h2>
        <p>For more information, reach out to us at contact@example.com...</p>
      </div>
    </div>
  );
}

export default App;
