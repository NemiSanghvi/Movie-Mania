import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MovieBattlePage from './pages/MovieBattlePage';
import MovieDetailsPage from './pages/MovieDetailsPage';
import LandingPage from "./pages/LandingPage";
import "./App.css";
import MovieRankingPage from "./pages/MovieRankingPage";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

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
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
