import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Projects from './pages/Projects'
import About from './pages/About'
import Contact from './pages/Contact'
import Navbar from './components/Navbar'
import Footer from './components/Footer'


function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* contenu des pages : prend tout l'espace restant */}
      <main className="flex-1">
      <Routes>
        <Route path="/" element={<Navigate to="/webdev_site_portfolio" replace />} />
        <Route path="/webdev_site_portfolio" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      </main>

      <Footer />
    </div>
  );
}

export default App
