import { DownloadContext } from "../contexts";
import useLocalStorage from "../hooks/useLocalStorage";

const DownloadProvider = ({ children }) => {
  const [downloadedImage, setDownloadedImages] = useLocalStorage(
    "d-images",
    []
  );

  const handleDownloadedImage = (image) => {
    const alreadyDownloaded = downloadedImage.find(
      (img) => img.url === image.url
    );

    if (!alreadyDownloaded) {
      setDownloadedImages((prevImages) => [...prevImages, image]);
    }
  };

  return (
    <DownloadContext.Provider
      value={{ downloadedImage, handleDownloadedImage }}
    >
      {children}
    </DownloadContext.Provider>
  );
};
export default DownloadProvider;
