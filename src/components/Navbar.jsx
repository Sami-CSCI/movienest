import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

const links = [
  { to: "/", label: "Home" },
  { to: "/movies", label: "Movies" },
  { to: "/features", label: "Features" },
  { to: "/favourites", label: "Favourites" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
];

function Navbar() {
  const [open, setOpen] = useState(false);

  function linkClass({ isActive }) {
    return isActive
      ? "rounded-lg bg-brand-primary px-3 py-2 text-sm font-semibold text-brand-secondary"
      : "rounded-lg px-3 py-2 text-sm font-semibold text-tertiary hover:bg-primary_hover hover:text-secondary";
  }

  return (
    <header className="sticky top-0 z-10 border-b border-secondary bg-primary/90 backdrop-blur">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 md:px-8">
        <Link to="/" className="flex items-center gap-2 text-lg font-bold text-primary" onClick={() => setOpen(false)}>
          <span className="flex size-8 items-center justify-center rounded-lg bg-brand-solid text-white">▶</span>
          MovieNest
        </Link>

        <ul className="hidden gap-1 md:flex">
          {links.map((link) => (
            <li key={link.to}>
              <NavLink to={link.to} end className={linkClass}>
                {link.label}
              </NavLink>
            </li>
          ))}
        </ul>

        <button
          type="button"
          className="rounded-lg border border-primary px-3 py-1.5 text-secondary md:hidden"
          onClick={() => setOpen(!open)}
        >
          {open ? "✕" : "☰"}
        </button>
      </nav>

      {open && (
        <ul className="flex flex-col gap-1 border-t border-secondary px-4 py-3 md:hidden">
          {links.map((link) => (
            <li key={link.to}>
              <NavLink to={link.to} end className={linkClass} onClick={() => setOpen(false)}>
                {link.label}
              </NavLink>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
}

export default Navbar;
