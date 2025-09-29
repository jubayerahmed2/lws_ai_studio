const Select = ({ children, ...props }) => {
  return (
    <select
      {...props}
      className="w-full px-3 py-2 bg-zinc-900/10 border border-zinc-700/70 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
    >
      {children}
    </select>
  );
};
export default Select;
