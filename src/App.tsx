import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MovieBattlePage from './pages/MovieBattlePage';
import MovieDetailsPage from './pages/MovieDetailsPage';
import LandingPage from "./pages/LandingPage";
import "./App.css";
import MovieRankingPage from "./pages/MovieRankingPage";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import CreateBattlePage from "./pages/CreateBattlePage";
import BattleArenaPage from "./pages/BattleArenaPage";
import BattleDetailsPage from "./pages/BattleDetailsPage";
import LoginPage from "./pages/LoginPage";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<LandingPage/>} />
          <Route path="/battle-ground" element={<MovieBattlePage />} />
          <Route path="/movie/:id" element={<MovieDetailsPage />} />
          <Route path="/preferred-movies" element={<MovieRankingPage />}/>
          <Route path="/create-battle" element={<CreateBattlePage />} />
          <Route path="/arena" element={<BattleArenaPage />} />
          <Route path="/arena/battle/:id" element={<BattleDetailsPage />} />
          <Route path="/login" element={<LoginPage />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
