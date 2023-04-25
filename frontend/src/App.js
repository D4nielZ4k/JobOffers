import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import OfferList from "./components/OfferList";
import AddOffer from "./components/AddOffer";
import Pages from "./pages/Pages";
import Home from "./pages/Home";

function App() {
  return (
    <div className="App">
      <div className="Top-bar"> JOBS</div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/addOffer" element={<AddOffer />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
