import { Link } from 'react-router-dom'

function Footer() {
  return (
    <footer className="bg-black text-sm mt-12 px-6 py-4 border-t border-gray-700">
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row justify-between items-center gap-2">
        <p>© {new Date().getFullYear()} Frédéric Kah. Tous droits réservés.</p>
        <div className="flex gap-4">
          <Link to="/webdev_site_portfolio" className="text-secondary hover:text-primary">Accueil</Link>
          <Link to="/projects" className="text-secondary hover:text-primary">Projets</Link>
          <Link to="/about" className="text-secondary hover:text-primary">À propos</Link>
          <Link to="/contact" className="text-secondary hover:text-primary">Contact</Link>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
