import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Movies from "./pages/Movies";
import MovieDetails from "./pages/MovieDetails";
import Features from "./pages/Features";
import Favourites from "./pages/Favourites";
import About from "./pages/About";
import Contact from "./pages/Contact";

function App() {
  return (
    <div className="flex min-h-screen flex-col bg-primary">
      <Navbar />

      <main className="mx-auto w-full max-w-6xl flex-1 px-4 py-10 md:px-8">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/movies/:id" element={<MovieDetails />} />
          <Route path="/features" element={<Features />} />
          <Route path="/favourites" element={<Favourites />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}

export default App;
