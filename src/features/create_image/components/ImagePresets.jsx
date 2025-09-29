import { useContext } from "react";
import ImageCard from "../../../components/ImageCard";
import ImageCardScalleton from "../../../components/ImageCardScalleton";
import { ImageContext } from "../../../contexts";

const ImagePresets = () => {
  const { images, loading } = useContext(ImageContext);

  if (loading) {
    return (
      <div>
        <h3 className="text-zinc-200 mb-4 font-bold text-lg">Result</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">
          {Array(9)
            .fill(null)
            .map((_, i) => (
              <ImageCardScalleton key={i} />
            ))}
        </div>
      </div>
    );
  }

  if (!images.length) {
    return;
  }

  return (
    <div>
      <h3 className="text-zinc-200 mb-4 font-bold text-lg">Result</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">
        {images.map((img) => (
          <ImageCard key={img.url} img={img} />
        ))}
      </div>
    </div>
  );
};
export default ImagePresets;
