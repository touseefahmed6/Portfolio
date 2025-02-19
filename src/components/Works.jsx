import { motion } from 'framer-motion';
import { styles } from '../styles';
import { SectionWrapper } from '../hoc';
import { projects } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';
import ProjectCard from './ProjectCard';

const WorksComponent = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} `}>My work</p>
        <h2 className={`${styles.sectionHeadText}`}>Projects.</h2>
      </motion.div>

      <div className="w-full flex">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
          The following projects showcase my experience at Atompoint, where I contributed to developing innovative enterprise solutions. These projects highlight my expertise in building scalable applications, implementing complex features, and leveraging modern technologies. Explore my personal projects and open-source contributions through the See More button below.
        </motion.p>
      </div>

      <div className='mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7'>
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>

      {/* See More Button */}
      <div className='mt-10 flex justify-center'>
        <motion.button
          variants={fadeIn("up", "spring", projects.length * 0.5 + 0.5, 0.75)}
          onClick={() => window.open('https://github.com/touseefahmed6', '_blank')}
          className='bg-tertiary py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary hover:bg-tertiary/80 transition-all duration-300'
        >
          See More Projects
        </motion.button>
      </div>
    </>
  );
};

const Works = SectionWrapper(WorksComponent, "work");

export default Works;
