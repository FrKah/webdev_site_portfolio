import { Link } from "react-router";

function Footer() {
  return (
    <footer className="text-sm mt-12 bg-base-200 px-6 py-4">
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row justify-between items-center gap-2">
        <p>© {new Date().getFullYear()} Frédéric Kah. Tous droits réservés.</p>
        <div className="flex gap-4">
          <Link to="/webdev_site_portfolio" className="hover:text-primary">
            Accueil
          </Link>
          <Link to="/projects" className="hover:text-primary">
            Projets
          </Link>
          <Link to="/contact" className="hover:text-primary">
            Contact
          </Link>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
