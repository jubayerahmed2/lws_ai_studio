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
      {!downloaded && (
        <div className="absolute bottom-2 right-2  p-1 ">
          <DownloadIcon onClick={handleDownload} />
        </div>
      )}
      <img src={img.url} className="w-full h-48 object-cover " download />
    </div>
  );
};
export default ImageCard;
