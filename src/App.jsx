import Layout from "./Layout";
import CustomizedImageProvider from "./providers/CustomizedImageProvider";
import DownloadProvider from "./providers/DownloadProvider";
import ImageProvider from "./providers/ImageProvider";
import NavigationProvider from "./providers/NavigationProvider";

function App() {
  return (
    <CustomizedImageProvider>
      <NavigationProvider>
        <ImageProvider>
          <DownloadProvider>
            <Layout />
          </DownloadProvider>
        </ImageProvider>
      </NavigationProvider>
    </CustomizedImageProvider>
  );
}

export default App;
