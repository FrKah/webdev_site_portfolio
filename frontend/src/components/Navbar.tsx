import { Link, NavLink } from "react-router";
import { useTranslation } from "react-i18next";

const Navbar = () => {
  const { t, i18n } = useTranslation();
  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };
  return (
    <div className="navbar bg-base-200 shadow-sm">
      <div className="navbar-start">
        <Link to="/" className="btn btn-ghost normal-case text-xl">
          Frédéric Kah
        </Link>
      </div>

      {/* Desktop Menu */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 text-xl">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? "active font-bold" : "")}
            >
              {t("navbar.home")}
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/projects"
              className={({ isActive }) => (isActive ? "active font-bold" : "")}
            >
              {t("navbar.projects")}
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              className={({ isActive }) => (isActive ? "active font-bold" : "")}
            >
              {t("navbar.contact")}
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        {/* Language Selector */}
        <div className="mr-4">
          <select
            className="select select-sm"
            value={i18n.language}
            onChange={(e) => changeLanguage(e.target.value)}
          >
            <option value="fr">FR</option>
            <option value="en">EN</option>
          </select>
        </div>
        <label className="toggle text-base-content">
          <input type="checkbox" value="light" className="theme-controller" />

          <svg
            aria-label="moon"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <g
              strokeLinejoin="round"
              strokeLinecap="round"
              strokeWidth="2"
              fill="none"
              stroke="currentColor"
            >
              <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"></path>
            </g>
          </svg>
          <svg
            aria-label="sun"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <g
              strokeLinejoin="round"
              strokeLinecap="round"
              strokeWidth="2"
              fill="none"
              stroke="currentColor"
            >
              <circle cx="12" cy="12" r="4"></circle>
              <path d="M12 2v2"></path>
              <path d="M12 20v2"></path>
              <path d="m4.93 4.93 1.41 1.41"></path>
              <path d="m17.66 17.66 1.41 1.41"></path>
              <path d="M2 12h2"></path>
              <path d="M20 12h2"></path>
              <path d="m6.34 17.66-1.41 1.41"></path>
              <path d="m19.07 4.93-1.41 1.41"></path>
            </g>
          </svg>
        </label>
      </div>

      {/* Mobile Menu */}
      <div className="lg:hidden dropdown dropdown-end">
        <label tabIndex={0} className="btn btn-ghost lg:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </label>
        <ul
          tabIndex={0}
          className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
        >
          <li>
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? "active font-bold" : "")}
            >
              {t("navbar.home")}
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/projects"
              className={({ isActive }) => (isActive ? "active font-bold" : "")}
            >
              {t("navbar.projects")}
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className={({ isActive }) => (isActive ? "active font-bold" : "")}
            >
              {t("navbar.about")}
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              className={({ isActive }) => (isActive ? "active font-bold" : "")}
            >
              {t("navbar.contact")}
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
