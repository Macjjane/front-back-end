import { NavBar } from "./nav-bar";

export const Header = () => {
    return (
      <header className="flex items-center justify-between bg-blue-200 text-white h-20 px-8 text-lg">
        <img src="/logo-contest.png" alt="logo" className="w-30 h-20"  />
          <NavBar />
      </header>
    );
  };
  