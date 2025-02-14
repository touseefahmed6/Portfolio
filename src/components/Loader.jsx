const Loader = () => {
  return (
    <div className="w-full h-full flex justify-center items-center">
      <div className="w-20 h-20 border-2 border-opacity-20 border-blue-500 border-t-blue-500 rounded-full animate-spin"></div>
      <p className="text-sm text-white/75 ml-4">
        Loading...
      </p>
    </div>
  );
};

export default Loader;
