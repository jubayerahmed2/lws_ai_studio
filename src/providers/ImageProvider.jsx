import { useState } from "react";
import { ImageContext } from "../contexts";

const initialState = {
  images: [],
  loading: false,
  error: "",
};

const ImageProvider = ({ children }) => {
  const [imageState, setImageState] = useState(initialState);

  const handleGenerateImage = async (configuration) => {
    try {
      setImageState((prev) => ({
        ...prev,
        loading: true,
      }));

      const { width, height, model, prompt } = configuration;

      const requests = [];

      for (let r = 0; r < 9; r++) {
        const request = fetch(
          `https://image.pollinations.ai/prompt/${prompt}&width=${width}&hight=${height}&seed=${crypto.randomUUID()}&model=${model}`
        );
        requests.push(request);
      }

      const response = await Promise.all(requests);
      const result = response.map((imgObj) => ({
        url: imgObj.url,
        status: imgObj.status,
      }));

      setImageState((prev) => ({
        ...prev,
        images: result,
      }));
    } catch (error) {
      setImageState((prev) => ({
        ...prev,
        error: error?.message || error,
      }));
    } finally {
      setImageState((prev) => ({
        ...prev,
        loading: false,
      }));
    }
  };

  return (
    <ImageContext.Provider value={{ ...imageState, handleGenerateImage }}>
      {children}
    </ImageContext.Provider>
  );
};
export default ImageProvider;
