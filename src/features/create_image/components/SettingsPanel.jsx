import { useContext, useState } from "react";
import InputBox from "../../../components/InputBox";
import Button from "../../../components/ui/Button";
import Input from "../../../components/ui/Input";
import Option from "../../../components/ui/Option";
import Select from "../../../components/ui/Select";
import { aspectRatios } from "../../../constant";
import { ImageContext } from "../../../contexts";
import useQuery from "../../../hooks/useQuery";
import PromptField from "./PromptField";

const SettingsPanel = () => {
  const { data: models } = useQuery([], "https://image.pollinations.ai/models");

  const [configuration, setConfiguration] = useState({
    prompt: "",
    model: models && models[0],
    width: 1024,
    height: 1024,
  });

  const { handleGenerateImage, loading } = useContext(ImageContext);

  const selectedRatioIdx = aspectRatios.findIndex(
    (ratio) =>
      ratio.width === configuration.width &&
      ratio.height === configuration.height
  );

  return (
    <>
      <PromptField
        prompt={configuration.prompt}
        onChange={(e) => {
          setConfiguration((prev) => ({
            ...prev,
            prompt: e.target.value,
          }));
        }}
        disabled={loading}
        onGenerateImage={() => handleGenerateImage(configuration)}
      />

      <div className="border border-zinc-700/70 mb-6 rounded-lg p-4 mt-18">
        <div className="flex items-center justify-between mb-4">
          <h4 className="font-medium">Advanced Settings</h4>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {/* Model Selection */}
          <InputBox label="Model" htmlFor="model">
            <Select
              onChange={(e) => {
                setConfiguration((prev) => ({
                  ...prev,
                  model: e.target.value,
                }));
              }}
            >
              {models.map((model) => (
                <Option key={model} value={model} label={model} />
              ))}
            </Select>
          </InputBox>

          {/* Seed Input : Auto Generated, readonly for user */}
          <InputBox label="Seed (for reproducible results)" htmlFor="seed">
            <Input
              type="number"
              disabled={true}
              className="bg-zinc-900/10 px-3 py-2 border border-zinc-700/70 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
              placeholder="Random"
            />
          </InputBox>

          {/* Width Input */}

          <InputBox label="Width" htmlFor="width">
            <Input
              type="number"
              value={configuration.width}
              onChange={(e) => {
                if (Number(e.target.value) <= 3000) {
                  setConfiguration((prev) => ({
                    ...prev,
                    width: e.target.value,
                  }));
                }
              }}
              className="w-full bg-zinc-900/10 px-3 py-2 border border-zinc-700/70 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
              max={3000}
            />
          </InputBox>

          {/* Height Input */}

          <InputBox label="Height" htmlFor="height">
            <Input
              type="number"
              value={configuration.height}
              onChange={(e) => {
                if (Number(e.target.value) <= 3000) {
                  setConfiguration((prev) => ({
                    ...prev,
                    height: e.target.value,
                  }));
                }
              }}
              className="w-full bg-zinc-900/10 px-3 py-2 border border-zinc-700/70 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
              max={2000}
            />
          </InputBox>

          {/* Aspect Ratio Presets */}
          <InputBox label="Aspect Ratio Presets">
            <div className="flex flex-wrap gap-2">
              {aspectRatios.map((ratio, idx) => (
                <Button
                  key={ratio.ratio}
                  onClick={() => {
                    setConfiguration((prev) => ({
                      ...prev,
                      height: ratio.height,
                      width: ratio.width,
                    }));
                  }}
                  className={selectedRatioIdx === idx && "bg-zinc-800/80"}
                >
                  {ratio.ratio}
                </Button>
              ))}
            </div>
          </InputBox>
        </div>
      </div>
    </>
  );
};
export default SettingsPanel;
