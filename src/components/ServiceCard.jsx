import PropTypes from 'prop-types';
import { Tilt } from 'react-tilt';
import { motion } from 'framer-motion';
import { fadeIn } from '../utils/motion';
import { FaLayerGroup, FaReact, FaServer, FaRocket } from 'react-icons/fa';

const iconComponents = {
  FaLayerGroup,
  FaReact,
  FaServer,
  FaRocket,
};

// @ts-ignore
const ServiceCard = ({ index, title, icon, description }) => {
  // @ts-ignore
  const IconComponent = iconComponents[icon];

  return (
    <Tilt className='xs:w-[250px] w-full'>
      <motion.div
        variants={fadeIn("right", "spring", index * 0.5, 0.75)}
        className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
      >
        <div
          className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
        >
          <div className='w-16 h-16 flex items-center justify-center text-[48px] text-white'>
            {IconComponent && <IconComponent />}
          </div>

          <h3 className='text-white text-[20px] font-bold text-center'>
            {title}
          </h3>
          
          <p className='text-secondary text-[14px] text-center'>
            {description}
          </p>
        </div>
      </motion.div>
    </Tilt>
  );
};

ServiceCard.propTypes = {
  index: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired
};

export default ServiceCard;
