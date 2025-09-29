const Input = ({ className, ...props }) => {
  return (
    <input
      {...props}
      className={`${className} outline-none w-full  bg-transparent text-white placeholder-zinc-400 `}
    />
  );
};
export default Input;
