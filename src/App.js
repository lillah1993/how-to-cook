import "./App.css";
import HomePage from "./pages/homepage/homepage.component";
import { Route, Routes } from "react-router-dom";
import Favoritespage from "./pages/favoritespage/favorites";

const App = () => (
  <div>
    <Routes>
      <Route exact path="/" element={<HomePage />} />
      <Route path="/favorites" element={<Favoritespage />} />
    </Routes>
  </div>
);

export default App;
