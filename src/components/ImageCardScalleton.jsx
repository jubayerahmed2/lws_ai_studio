const ImageCardScalleton = () => {
  return (
    <div className="image-card rounded-xl overflow-hidden cursor-pointer relative">
      <div className="absolute bottom-2 right-2  p-1  h-5 w-5 bg-gray-400/20 rounded-md"></div>
      <div className="w-full h-48 object-cover bg-black/50 animate-pulse" />
    </div>
  );
};
export default ImageCardScalleton;
