import "./App.css";
import { BrowserRouter } from "react-router-dom";
import OfferList from "./components/OfferList";
import AddOffer from "./components/AddOffer";

function App() {
  return (
    <div className="App">
      <AddOffer></AddOffer>
      <OfferList></OfferList>
      <BrowserRouter></BrowserRouter>
    </div>
  );
}

export default App;
