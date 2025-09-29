import { useContext } from "react";
import logo from "../assets/logo.svg";
import { NavigationContext } from "../contexts";
import NavLink from "./ui/NavLink";

const Header = () => {
  const { navLinks, activeLinkId, setActiveLinkId } =
    useContext(NavigationContext);
  return (
    <header className="flex items-center mb-12 justify-between">
      <div className="flex items-center">
        <img src={logo} className="h-10" />
      </div>
      <ul className="ml-4 text-sm text-zinc-400 flex gap-8">
        {navLinks.map((link) => (
          <NavLink
            key={link.id}
            linkId={link.id}
            activeLinkId={activeLinkId}
            onNavigate={() => setActiveLinkId(link.id)}
          >
            {link.label}
          </NavLink>
        ))}
      </ul>
    </header>
  );
};
export default Header;
