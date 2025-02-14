import { useState, useEffect } from 'react';

const Loader = () => {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(false);
    }, 5000); // 5 seconds minimum loading time

    return () => clearTimeout(timer);
  }, []);

  if (!show) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-primary">
      <div className="flex flex-col items-center">
        <div className="w-[120px] h-[120px] relative">
          <div className="absolute w-full h-full border-[10px] border-[#915EFF] rounded-full animate-spin-slow"></div>
          <div className="absolute w-full h-full border-[10px] border-white/30 rounded-full animate-pulse scale-90"></div>
          <div className="absolute w-full h-full border-[10px] border-primary rounded-full animate-spin scale-75"></div>
        </div>
        <div className="mt-8 text-center">
          <h2 className="text-3xl font-bold text-white animate-pulse">
            Welcome<span className="animate-bounce inline-block">.</span>
            <span className="animate-bounce inline-block delay-150">.</span>
            <span className="animate-bounce inline-block delay-300">.</span>
          </h2>
          <p className="text-lg text-white/75 mt-4 animate-fade-in">
            Preparing an amazing experience for you
          </p>
        </div>
      </div>
    </div>
  );
};

export default Loader;
