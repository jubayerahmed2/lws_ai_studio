import Heading from "../../components/Heading";
import ImagePresets from "./components/ImagePresets";
import SettingsPanel from "./components/SettingsPanel";

const CreateImage = () => {
  return (
    <>
      <Heading>
        Let's create a masterpiece, Alvian! <span className="text-2xl">👋</span>
      </Heading>

      {/* Actions */}
      <SettingsPanel />

      {/* View  */}
      <ImagePresets />
    </>
  );
};
export default CreateImage;
