const Option = ({ value, selected, label }) => {
  return (
    <option
      className="bg-zinc-900 capitalize"
      value={value}
      selected={selected}
    >
      {label}
    </option>
  );
};
export default Option;
