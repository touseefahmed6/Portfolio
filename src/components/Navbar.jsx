import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { styles } from '../styles';
import { navLinks } from '../constants';
import { logo, menu, close } from '../assets/index';

const Navbar = () => {
  const [active, setActive] = useState('');
  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    const handleEsc = (event) => {
      if (event.key === 'Escape') {
        setToggle(false);
      }
    };
    window.addEventListener('keydown', handleEsc);

    return () => {
      window.removeEventListener('keydown', handleEsc);
    };
  }, []);

  return (
    <nav
      className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-primary`}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <Link
          to="/"
          className="flex items-center gap-2"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <img src={logo} alt="logo" className="w-9 h-9 object-contain" />
          <p className="text-white text-[18px] font-bold cursor-pointer flex">
            Your Name &nbsp;
            <span className="sm:block hidden">| Portfolio</span>
          </p>
        </Link>
        <ul className="list-none hidden sm:flex flex-row gap-10">
          {navLinks.map((link) => (
            <li
              key={link.id}
              className={`${
                active === link.title ? "text-white" : "text-secondary"
              } hover:text-white text-[18px] font-medium cursor-pointer`}
              onClick={() => setActive(link.title)}
            >
              <a href={`#${link.id}`}>{link.title}</a>
            </li>
          ))}
        </ul>

        <div className="sm:hidden flex flex-1 justify-end items-center">
          <img
            src={toggle ? close : menu}
            alt="menu"
            className="w-[28px] h-[28px] object-contain cursor-pointer invert relative z-30"
            onClick={() => setToggle(!toggle)}
          />
          <AnimatePresence>
            {toggle && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed top-0 right-0 left-0 bottom-0 w-full h-screen z-20 flex flex-col justify-center items-center"
              >
                {/* Background with gradient and pattern */}
                <div className="absolute inset-0 bg-[rgb(16,13,37)] bg-opacity-98">
                  <div className="absolute inset-0 bg-gradient-to-b from-[#915EFF]/10 via-transparent to-[#915EFF]/5" />
                  <div className="absolute inset-0 bg-[url('/src/assets/herobg.png')] bg-repeat opacity-5" />
                </div>

                {/* Purple circle decoration */}
                <div className="absolute top-[20%] left-[20%] w-32 h-32 bg-[#915EFF]/20 rounded-full blur-3xl" />
                <div className="absolute bottom-[20%] right-[20%] w-40 h-40 bg-[#915EFF]/10 rounded-full blur-3xl" />

                {/* Menu content */}
                <motion.ul 
                  className="list-none flex flex-col items-center gap-8 w-full relative"
                  initial={{ y: 20 }}
                  animate={{ y: 0 }}
                  transition={{ delay: 0.1 }}
                >
                  {navLinks.map((link, index) => (
                    <motion.li
                      key={link.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 + 0.2 }}
                      className={`${
                        active === link.title ? "text-[#915EFF]" : "text-gray-200"
                      } font-poppins font-medium cursor-pointer text-[32px] hover:text-[#915EFF] transition-colors`}
                      onClick={() => {
                        setToggle(!toggle);
                        setActive(link.title);
                      }}
                    >
                      <a href={`#${link.id}`}>{link.title}</a>
                    </motion.li>
                  ))}
                </motion.ul>

                {/* Social links or additional info could go here */}
                <motion.div 
                  className="absolute bottom-10 text-gray-400 text-sm"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                >
                  Press ESC to close
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
