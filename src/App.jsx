import Layout from "./Layout";
import DownloadProvider from "./providers/DownloadProvider";
import ImageProvider from "./providers/ImageProvider";
import NavigationProvider from "./providers/NavigationProvider";

function App() {
  return (
    <NavigationProvider>
      <ImageProvider>
        <DownloadProvider>
          <Layout />
        </DownloadProvider>
      </ImageProvider>
    </NavigationProvider>
  );
}

export default App;
