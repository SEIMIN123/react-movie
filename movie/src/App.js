import Home from "./routes/Home";
import About from "./routes/About";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import "./App.css";

function App() {
  return (
    <>
      {/* <Navigation /> */}
      <BrowserRouter>
        <Routes>
          <Route path="/" exact={true} element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
export default App;
