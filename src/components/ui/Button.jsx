const Button = ({ children, className, ...props }) => {
  return (
    <button
      {...props}
      className={`${
        className || "bg-zinc-900/10"
      } cursor-pointer   px-3 py-3 text-xs  hover:bg-zinc-800 rounded transition-colors`}
    >
      {children}
    </button>
  );
};
export default Button;
