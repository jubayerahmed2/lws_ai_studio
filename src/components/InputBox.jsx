const InputBox = ({ htmlFor = "", label, children }) => {
  return (
    <div>
      <label
        htmlFor={htmlFor}
        className="block text-sm font-medium text-zinc-700 mb-1"
      >
        {label}
      </label>
      {children}
    </div>
  );
};
export default InputBox;
