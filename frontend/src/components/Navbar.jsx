import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

function Navbar() {
  const [open, setOpen] = useState(false);

  const toggleMenu = () => setOpen(!open);

  return (
    <nav className="bg-black px-6 py-4 border-b border-gray-700 text-white">
      <div className="flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-white">
          Frédéric Kah
        </Link>

        {/* Burger icon on mobile */}
        <button
          className="md:hidden text-gray-700"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Desktop menu */}
        <div className="hidden md:flex space-x-4">
          <NavItem to="/webdev_site_portfolio" label="Accueil" />
          <NavItem to="/projects" label="Projets" />
          <NavItem to="/about" label="À propos" />
          <NavItem to="/contact" label="Contact" />
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="mt-4 flex flex-col space-y-2 md:hidden">
          <NavItem to="/webdev_site_portfolio" label="Accueil" onClick={() => setOpen(false)} />
          <NavItem to="/projects" label="Projets" onClick={() => setOpen(false)} />
          <NavItem to="/about" label="À propos" onClick={() => setOpen(false)} />
          <NavItem to="/contact" label="Contact" onClick={() => setOpen(false)} />
        </div>
      )}
    </nav>
  );
}

function NavItem({ to, label, onClick }) {
  return (
    <NavLink
      to={to}
      onClick={onClick}
      className={({ isActive }) =>
        `block text-lg font-medium ${
          isActive ? 'text-white font-semibold' : 'text-gray-700 hover:text-blue-500'
        }`
      }
    >
      {label}
    </NavLink>
  );
}

export default Navbar;
