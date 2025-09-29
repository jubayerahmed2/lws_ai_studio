import { useContext } from "react";
import Glow from "./components/Glow";
import Header from "./components/Header";
import { NavigationContext } from "./contexts";
import CreateImage from "./features/create_image/CreateImage";
import DownloadedImages from "./features/downloaded/DownloadedImages";

const Layout = () => {
  const { activeLinkId } = useContext(NavigationContext);

  let currentPageContent;

  if (activeLinkId === "create_image") {
    currentPageContent = <CreateImage />;
  } else if (activeLinkId === "downloaded") {
    currentPageContent = <DownloadedImages />;
  }
  return (
    <div className="container mx-auto px-4 py-8 max-w-6xl">
      <Header />
      <Glow />

      <main className="relative z-10">{currentPageContent}</main>
    </div>
  );
};
export default Layout;
