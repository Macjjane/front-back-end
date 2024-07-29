import { NavLink } from "react-router-dom";

const activeStyles = "text-red-500";
const inactiveStyles = "text-white";
export const NavBar = () => {
  return (
    <nav className="space-x-2">
      <NavLink
        to={"/"}
        className={({ isActive }) =>
          `${isActive ? activeStyles : inactiveStyles}`
        }
      >
        Home
      </NavLink>
      <NavLink
        to={"/signup"}
        className={({ isActive }) =>
          `${isActive ? activeStyles : inactiveStyles}`
        }
      >
        SignUp
      </NavLink>
      <NavLink
        to={"/login"}
        className={({ isActive }) =>
          `${isActive ? activeStyles : inactiveStyles}`
        }
      >
       Login
      </NavLink>
     </nav>
      );
      };