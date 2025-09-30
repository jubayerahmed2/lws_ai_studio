import { saveAs } from "file-saver";
import { useContext } from "react";
import { DownloadContext } from "../contexts";
import DownloadIcon from "./Icons/DownloadIcon";

const ImageCard = ({ img, downloaded }) => {
  const { handleDownloadedImage } = useContext(DownloadContext);

  const handleDownload = () => {
    handleDownloadedImage(img);
    saveAs(img.url, img.url.slice(37, 50));
  };

  return (
    <div className="image-card rounded-xl overflow-hidden cursor-pointer relative">
      {!downloaded && img.status <= 200 && (
        <div className="absolute bottom-2 right-2  p-1 ">
          <DownloadIcon onClick={handleDownload} />
        </div>
      )}
      {img.status > 200 ? (
        <div className="w-full h-48 flex justify-center items-center text-2xl font-bold bg-black/50">
          Failed to load
        </div>
      ) : (
        <img src={img.url} className="w-full h-48 object-cover " download />
      )}
    </div>
  );
};
export default ImageCard;
