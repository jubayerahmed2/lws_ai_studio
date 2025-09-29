import { useContext } from "react";
import Heading from "../../components/Heading";
import ImageCard from "../../components/ImageCard";
import { DownloadContext } from "../../contexts";

const DownloadedImages = () => {
  const { downloadedImage } = useContext(DownloadContext);

  return (
    <>
      <Heading>
        Downloaded <span className="text-2xl">👋</span>
      </Heading>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
        {downloadedImage.map((img) => (
          <ImageCard key={img.url} img={img} downloaded />
        ))}
      </div>
    </>
  );
};
export default DownloadedImages;
