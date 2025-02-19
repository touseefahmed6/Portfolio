import { motion } from 'framer-motion';
import { styles } from '../styles';
import { services } from '../constants';
import { textVariant } from '../utils/motion';
import { SectionWrapper } from '../hoc';
import ServiceCard from './ServiceCard';

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={textVariant()}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        I am a skilled Full-Stack Developer with experience in React.js, Next.js, Node.js, and Firebase. I specialize in building scalable, high-performance web applications with a focus on creating responsive, user-friendly interfaces and efficient backend solutions. I am a quick learner and work closely with clients to deliver clean, performance-driven development that brings real value to their projects. Let’s work together to bring your vision to life!
      </motion.p>

      <div className="mt-20 flex flex-wrap justify-center gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

const WrappedAbout = SectionWrapper(About, "about");
export default WrappedAbout;
