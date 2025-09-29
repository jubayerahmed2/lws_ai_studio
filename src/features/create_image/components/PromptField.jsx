import SearchIcon from "../../../components/Icons/SearchIcon";
import SendIcon from "../../../components/Icons/SendIcon";
import Input from "../../../components/ui/Input";

const PromptField = () => {
  return (
    <div className="relative mb-8 rounded-full overflow-hidden border border-zinc-700 bg-zinc-900/10 backdrop-blur-sm">
      <div className="flex items-center">
        <div className="pl-5 pr-2">
          <SearchIcon />
        </div>
        <Input
          type="text"
          placeholder="Create with Prompts"
          className="w-full py-4 px-2 bg-transparent text-lg"
        />
        <button className="bg-zinc-800 hover:bg-zinc-700 transition-colors p-4 mr-1 rounded-full">
          <SendIcon />
        </button>
      </div>
    </div>
  );
};
export default PromptField;
