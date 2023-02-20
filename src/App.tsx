import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Header } from "./components/Header";
import Favourites from "./pages/Favourites";
import Home from "./pages/Home";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/favourites" element={<Favourites />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
