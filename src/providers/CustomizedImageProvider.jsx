import { useState } from "react";
import { CustomizedImageContext } from "../contexts";
import useQuery from "../hooks/useQuery";

const CustomizedImageProvider = ({ children }) => {
  const { data: models } = useQuery([], "https://image.pollinations.ai/models");

  const [configuration, setConfiguration] = useState({
    prompt: "",
    model: models && models[0],
    width: 1024,
    height: 1024,
  });

  return (
    <CustomizedImageContext.Provider
      value={{ configuration, setConfiguration }}
    >
      {children}
    </CustomizedImageContext.Provider>
  );
};
export default CustomizedImageProvider;
