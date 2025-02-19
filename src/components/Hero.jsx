import { motion } from 'framer-motion';
import { styles } from '../styles';
import { ComputersCanvas } from './canvas';
// @ts-ignore
import { profile, resume } from '../assets';

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto">
      <div className="absolute w-full h-full">
        <ComputersCanvas />
      </div>
      
      <div className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5 z-20`}>
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915eff]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>

        <div className='flex flex-col-reverse lg:flex-row items-center justify-between w-full'>
          <div>
            <h1 className={`${styles.heroHeadText} text-white`}>
              Hi, I am <span className="text-[#915eff]">Touseef</span>
            </h1>
            <p className={`${styles.heroSubText} mt-2 text-white-100`}>
              I develop user interfaces, web applications, <br className="sm:block hidden" />
              and backend solutions
            </p>
            
            {/* Download Resume Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="mt-8"
            >
              <a
                href={resume}
                download="Touseef Ahmed - FullStack Developer.pdf"
                className="inline-flex items-center px-6 py-3 rounded-full bg-[#915eff] hover:bg-[#915eff]/80 transition-colors text-white font-bold text-lg group relative overflow-hidden"
              >
                <span className="relative z-10 flex items-center">
                  <span>Download Resume</span>
                  <motion.svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    className="h-5 w-5 ml-2 group-hover:translate-y-1 transition-transform" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth={2} 
                      d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" 
                    />
                  </motion.svg>
                </span>
                <motion.div
                  className="absolute inset-0 bg-white"
                  initial={{ scale: 0, opacity: 0.5 }}
                  whileHover={{ scale: 1.5, opacity: 0 }}
                  transition={{ duration: 0.4 }}
                />
              </a>
            </motion.div>
          </div>

          <div className="lg:w-1/3 w-1/2 mb-8 lg:mb-0">
            <motion.div
              initial={{ scale: 0, opacity: 0, rotate: -180 }}
              animate={{ scale: 1, opacity: 1, rotate: 0 }}
              transition={{ 
                type: "spring",
                stiffness: 260,
                damping: 20,
                duration: 1.5 
              }}
              className="relative"
            >
              {/* Decorative circle behind the image */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-violet-500 to-fuchsia-500 blur-xl opacity-30 animate-pulse" />
              
              {/* Profile image */}
              <img
                src={profile}
                alt="Touseef Ahmed"
                className="relative w-full h-full object-cover rounded-full border-4 border-[#915eff] shadow-xl hover:scale-105 transition-transform duration-300"
              />

              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-[#915eff] rounded-full animate-bounce" />
              <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-[#915eff] rounded-full animate-bounce" style={{ animationDelay: "0.2s" }} />
            </motion.div>
          </div>
        </div>
      </div>

      <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center z-10">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.div
              animate={{ y: [0, 24, 0] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: 'loop',
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
