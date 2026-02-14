import { Link, NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="z-20 left-0 right-0 flex items-center gap-6 px-8 py-4 bg-slate-900 text-white">
      <NavLink
        to="/"
        className={({ isActive }) =>
          isActive
            ? "text-blue-400 font-semibold"
            : "hover:text-blue-400 transition"
        }
      >
        Home
      </NavLink>

      <NavLink
        to="/chair"
        className={({ isActive }) =>
          isActive
            ? "text-blue-400 font-semibold"
            : "hover:text-blue-400 transition"
        }
      >
        Chair Configurator
      </NavLink>

      <NavLink
        to="/door"
        className={({ isActive }) =>
          isActive
            ? "text-blue-400 font-semibold"
            : "hover:text-blue-400 transition"
        }
      >
        Door Configurator
      </NavLink>
    </nav>
  );
}
