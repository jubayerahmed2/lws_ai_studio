import { useState } from "react";
import SearchIcon from "../../../components/Icons/SearchIcon";
import SendIcon from "../../../components/Icons/SendIcon";
import Input from "../../../components/ui/Input";

const PromptField = ({ prompt, onChange, onGenerateImage, disabled }) => {
  const [err, setErr] = useState();

  const handleClick = () => {
    setErr("");

    if (prompt) {
      onGenerateImage();
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
            onChange={onChange}
            disabled={disabled}
          />
          <button
            disabled={disabled}
            onClick={handleClick}
            className="bg-zinc-800 hover:bg-zinc-700 transition-colors p-4 mr-1 rounded-full disabled:cursor-progress disabled:hover:bg-zinc-800"
          >
            <SendIcon />
          </button>
        </div>
      </div>
      <span className="text-red-500 text-xs block -mt-7"> {err} </span>
    </>
  );
};

export default PromptField;
