import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { styles } from '../styles';
import { navLinks } from '../constants';
import { logo, menu, close } from '../assets';

const Navbar = () => {
  const [active, setActive] = useState('');
  const [toggle, setToggle] = useState(false);
  // @ts-ignore
  const [, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const letterAnimation = {
    hidden: { y: 20, opacity: 0 },
    // @ts-ignore
    visible: (i) => ({
      y: 0,
      opacity: 1,
      transition: {
        delay: i * 0.1,
        type: "spring",
        damping: 12,
        stiffness: 200
      }
    }),
    hover: {
      y: -5,
      x: 0,
      color: "#915eff",
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 10
      }
    }
  };

  const mobileMenuVariants = {
    hidden: { height: 0, opacity: 0 },
    visible: {
      height: "auto",
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: [0.04, 0.62, 0.23, 0.98]
      }
    },
    exit: {
      height: 0,
      opacity: 0,
      transition: {
        duration: 0.5,
        ease: [0.04, 0.62, 0.23, 0.98]
      }
    }
  };

  return (
    <nav
      className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-50 bg-primary/30 backdrop-blur-xl before:absolute before:inset-0 before:bg-gradient-to-r before:from-[#915eff]/10 before:to-primary/30 before:backdrop-blur-xl`}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto relative z-50">
        <Link
          to="/"
          className="flex items-center gap-2"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <motion.div
            whileHover={{ rotate: 360, scale: 1.2 }}
            transition={{ duration: 0.6 }}
          >
            <img src={logo} alt="logo" className="w-9 h-9 object-contain" />
          </motion.div>
          <p className="text-white text-[18px] font-bold cursor-pointer flex">
            Touseef Ahmed &nbsp;
            <span className="sm:block hidden">| Portfolio</span>
          </p>
        </Link>

        <ul className="list-none hidden sm:flex flex-row gap-10">
          {navLinks.map((link) => (
            <motion.li
              key={link.id}
              className="relative"
            >
              <motion.div
                className={`${active === link.title ? "text-white" : "text-secondary"
                  } text-[18px] font-medium cursor-pointer`}
                onHoverStart={() => {
                  const letters = link.title.split('');
                  // @ts-ignore
                  return letters.map((letter, index) => ({
                    ...letterAnimation.hover,
                    transition: { delay: index * 0.05 }
                  }));
                }}
                onClick={() => {
                  setActive(link.title);
                  // Update URL hash without default jump
                  window.history.pushState({}, '', `#${link.id}`);
                }}
              >
                <a
                  href={`#${link.id}`}
                  onClick={(e) => {
                    e.preventDefault();
                    const element = document.getElementById(link.id);
                    if (element) {
                      element.scrollIntoView({ behavior: "smooth" });
                    }
                  }}
                  className="relative overflow-hidden block"
                >
                  {link.title.split('').map((letter, index) => (
                    <motion.span
                      key={index}
                      custom={index}
                      variants={letterAnimation}
                      initial="hidden"
                      animate="visible"
                      whileHover="hover"
                      className="inline-block"
                    >
                      {letter}
                    </motion.span>
                  ))}
                  <motion.div
                    className="absolute bottom-0 left-0 w-full h-[2px] bg-[#915eff]"
                    initial={{ scaleX: 0 }}
                    whileHover={{ scaleX: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                </a>
              </motion.div>
            </motion.li>
          ))}
        </ul>

        <div className="sm:hidden flex flex-1 justify-end items-center">
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setToggle(!toggle)}
          >
            <img
              src={toggle ? close : menu}
              alt="menu"
              className="w-[28px] h-[28px] object-contain cursor-pointer invert brightness-100"
            />
          </motion.div>

          {toggle && (
            <motion.div
              variants={mobileMenuVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="fixed top-[4.5rem] right-0 left-0 p-6 bg-gradient-to-b from-primary to-[#915eff]/20 backdrop-blur-lg z-50"
            >
              <ul className="list-none flex flex-col gap-4">
                {navLinks.map((link) => (
                  <motion.li
                    key={link.id}
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    className={`${active === link.title ? "text-white" : "text-secondary"
                      } font-poppins font-medium cursor-pointer text-[16px] border-b border-gray-800 pb-2`}
                    onClick={() => {
                      setToggle(!toggle);
                      setActive(link.title);
                      // Update URL hash without default jump
                      window.history.pushState({}, '', `#${link.id}`);
                      const element = document.getElementById(link.id);
                      if (element) {
                        element.scrollIntoView({ behavior: "smooth" });
                      }
                    }}
                  >
                    <a href={`#${link.id}`} className="block w-full">
                      {link.title}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
