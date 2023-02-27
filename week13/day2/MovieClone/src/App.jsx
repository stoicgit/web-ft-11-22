import { Route, Routes } from "react-router-dom";
import HomePage from "./components/HomePage";
import Navbar from "./components/Navbar";
import Browser from "./components/Browser";
import Icons from "./components/Icons";

function App() {
  return (
    <div className="flex flex-col justify-between min-h-screen">
      <div>
        <Navbar />

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/browse">
            <Route index element={<Browser />} />
            <Route path=":movieTitle" element={<Icons />} />
          </Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
