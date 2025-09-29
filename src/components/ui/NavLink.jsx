const NavLink = ({ linkId, activeLinkId, children, onNavigate }) => {
  const activeLinkClasses =
    "font-medium text-zinc-200 cursor-pointer transition-all";
  const inActiveLinkClasses =
    "hover:text-zinc-200 cursor-pointer transition-all";

  return (
    <li
      onClick={onNavigate}
      className={`${
        linkId === activeLinkId ? activeLinkClasses : inActiveLinkClasses
      }`}
    >
      {children}
    </li>
  );
};
export default NavLink;
