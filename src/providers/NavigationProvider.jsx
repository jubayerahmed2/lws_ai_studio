import { useState } from "react";
import { NavigationContext } from "../contexts";

const navLinks = [
  {
    id: "create_image",
    label: "Create Image",
  },
  {
    id: "downloaded",
    label: "Downloaded",
  },
];

const NavigationProvider = ({ children }) => {
  const [activeLinkId, setActiveLinkId] = useState(navLinks[0].id);

  return (
    <NavigationContext value={{ navLinks, activeLinkId, setActiveLinkId }}>
      {children}
    </NavigationContext>
  );
};
export default NavigationProvider;
