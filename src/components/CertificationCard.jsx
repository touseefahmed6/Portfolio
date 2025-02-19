import { motion } from 'framer-motion';
import PropTypes from 'prop-types';
import { fadeIn } from '../utils/motion';

// @ts-ignore
const CertificationCard = ({ index, title, organization, date, image, link }) => (
  <motion.div
    variants={fadeIn("up", "spring", index * 0.5, 0.75)}
    className='bg-black-200 p-5 rounded-3xl w-full'
  >
    <div className='relative w-full h-[230px] cursor-pointer' onClick={() => window.open(link, "_blank")}>
      <img
        src={image}
        alt={title}
        className='w-full h-full object-cover rounded-2xl'
      />
    </div>

    <div className='mt-5'>
      <h3 className='text-white font-bold text-[24px]'>{title}</h3>
      <p className='text-secondary text-[16px]'>{organization}</p>
      <p className='text-secondary text-[14px]'>{date}</p>
    </div>
  </motion.div>
);

CertificationCard.propTypes = {
  index: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  organization: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
};

export default CertificationCard;
