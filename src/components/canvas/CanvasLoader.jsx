import { Html } from '@react-three/drei';

const CanvasLoader = () => {
  return (
    <Html
      as='div'
      center
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <div className="flex flex-col items-center">
        <div className="w-[84px] h-[84px] relative animate-pulse">
          <div className="absolute w-full h-full border-8 border-primary rounded-full animate-spin"></div>
          <div className="absolute w-full h-full border-8 border-[#915EFF] rounded-full animate-spin-slow rotate-45"></div>
          <div className="absolute w-full h-full border-8 border-white/30 rounded-full animate-pulse"></div>
        </div>
        <div className="mt-4 text-center">
          <h2 className="text-xl font-bold text-white animate-pulse">
            Loading<span className="animate-bounce inline-block">.</span>
            <span className="animate-bounce inline-block delay-150">.</span>
            <span className="animate-bounce inline-block delay-300">.</span>
          </h2>
          <p className="text-sm text-white/75 mt-2 animate-fade-in">
            Preparing something amazing for you
          </p>
        </div>
      </div>
    </Html>
  );
};

export default CanvasLoader;
