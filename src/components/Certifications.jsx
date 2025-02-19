import { motion } from 'framer-motion';
import { styles } from '../styles';
import { SectionWrapper } from '../hoc';
import { textVariant } from '../utils/motion';
import { certificates } from '../constants';
import CertificationCard from './CertificationCard';

const Certifications = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>My Achievements</p>
        <h2 className={styles.sectionHeadText}>Certifications.</h2>
      </motion.div>

      <div className='mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7 justify-items-center'>
        {certificates.map((certificate, index) => (
          <CertificationCard 
            key={certificate.title} 
            index={index} 
            {...certificate} 
          />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Certifications, "certifications");
