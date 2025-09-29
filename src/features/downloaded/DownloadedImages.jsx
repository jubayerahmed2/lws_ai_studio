import Heading from "../../components/Heading";
import ImageCard from "../../components/ImageCard";

const DownloadedImages = () => {
  return (
    <>
      <Heading>
        Downloaded <span className="text-2xl">👋</span>
      </Heading>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
        <ImageCard />
        <ImageCard />
        <ImageCard />
      </div>
    </>
  );
};
export default DownloadedImages;
