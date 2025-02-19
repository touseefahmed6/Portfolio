import { motion } from 'framer-motion';
import { SectionWrapper } from '../hoc';
import { technologies } from '../constants';
import { textVariant } from '../utils/motion';
import { styles } from '../styles';
import {
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiTailwindcss,
  SiJavascript,
  SiTypescript,
  SiFirebase,
  SiMongodb,
  SiExpress,
  SiBootstrap,
  SiGooglecloud,
  SiOpenai
} from 'react-icons/si';
import { DiMsqlServer } from 'react-icons/di';

const iconComponents = {
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiTailwindcss,
  SiJavascript,
  SiTypescript,
  SiFirebase,
  SiMongodb,
  DiMsqlServer,
  SiExpress,
  SiBootstrap,
  SiGooglecloud,
  SiOpenai,
};

// @ts-ignore
// eslint-disable-next-line react/prop-types
const TechCard = ({ name, icon }) => {
  // @ts-ignore
  const IconComponent = iconComponents[icon];

  return (
    <div className='w-28 h-28'>
      <motion.div
        className='w-full h-full flex flex-col items-center justify-center gap-2 rounded-xl bg-tertiary hover:bg-tertiary/60 cursor-pointer transition-colors duration-300'
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        {IconComponent && <IconComponent className='text-4xl text-white' />}
        <p className='text-white text-[14px] text-center'>{name}</p>
      </motion.div>
    </div>
  );
};

const Tech = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>My technical expertise</p>
        <h2 className={styles.sectionHeadText}>Skills & Technologies.</h2>
      </motion.div>

      <div className='mt-10 flex flex-wrap gap-10 justify-center'>
        {technologies.map((technology) => (
          <TechCard key={technology.name} {...technology} />
        ))}
      </div>
    </>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export default SectionWrapper(Tech, "tech");
