import Heading from "../../components/Heading";
import ImagePresets from "./components/ImagePresets";
import PromptField from "./components/PromptField";
import SettingsPanel from "./components/SettingsPanel";

const CreateImage = () => {
  return (
    <>
      <Heading>
        Let's create a masterpiece, Alvian! <span className="text-2xl">👋</span>
      </Heading>
      <PromptField />
      <SettingsPanel />
      <ImagePresets />
    </>
  );
};
export default CreateImage;
