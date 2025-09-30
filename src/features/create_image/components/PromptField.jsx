import { useContext, useState } from "react";
import { LuLoader } from "react-icons/lu";
import SearchIcon from "../../../components/Icons/SearchIcon";
import SendIcon from "../../../components/Icons/SendIcon";
import Input from "../../../components/ui/Input";
import { CustomizedImageContext, ImageContext } from "../../../contexts";

const PromptField = () => {
  const { handleGenerateImage, loading } = useContext(ImageContext);
  const { configuration, setConfiguration } = useContext(
    CustomizedImageContext
  );
  const [err, setErr] = useState();

  const prompt = configuration.prompt;

  const handleClick = () => {
    setErr("");

    if (prompt) {
      handleGenerateImage(configuration);
    } else {
      setErr("Prompt field should not be empty!");
    }
  };
  return (
    <>
      <div className="relative mb-8 rounded-full overflow-hidden border border-zinc-700 bg-zinc-900/10 backdrop-blur-sm">
        <div className="flex items-center">
          <div className="pl-5 pr-2">
            <SearchIcon />
          </div>
          <Input
            type="text"
            placeholder="Create with Prompts"
            className={`w-full py-4 px-2 bg-transparent text-lg disabled:cursor-progress`}
            value={prompt}
            onChange={(e) =>
              setConfiguration((prev) => ({
                ...prev,
                prompt: e.target.value,
              }))
            }
            disabled={loading}
          />
          <button
            disabled={loading}
            onClick={handleClick}
            className="bg-zinc-800 hover:bg-zinc-700 transition-colors p-4 mr-1 rounded-full  disabled:hover:bg-zinc-800 h-14 w-14"
          >
            {loading ? (
              <LuLoader size={25} className="animate-spin" />
            ) : (
              <SendIcon />
            )}
          </button>
        </div>
      </div>
      <span className="text-red-500 text-xs block -mt-7"> {err} </span>
    </>
  );
};

export default PromptField;
