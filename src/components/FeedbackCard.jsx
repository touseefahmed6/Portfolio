import { motion } from 'framer-motion';
import { fadeIn } from '../utils/motion';
import PropTypes from 'prop-types';
import { useState } from 'react';

// @ts-ignore
const FeedbackCard = ({ index, testimonial, name, designation, company, image }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <motion.div
      variants={fadeIn("", "spring", index * 0.5, 0.75)}
      className={`bg-black-200 p-10 rounded-3xl xs:w-[320px] w-full ${isExpanded ? 'h-auto' : 'h-[420px]'} flex flex-col transition-all duration-300`}
    >
      <p className='text-white font-black text-[48px]'></p>

      <div className='flex-1 flex flex-col justify-between'>
        <div>
          <p className={`text-white tracking-wider text-[18px] ${isExpanded ? '' : 'line-clamp-6'}`}>
            {testimonial}
          </p>
          {testimonial.length > 180 && (
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className='text-[#915EFF] hover:text-purple-400 mt-2 text-sm font-medium transition-colors'
            >
              {isExpanded ? 'See Less' : 'See More'}
            </button>
          )}
        </div>

        <div className='mt-7 flex justify-between items-center gap-1'>
          <div className='flex-1 flex flex-col'>
            <p className='text-white font-medium text-[16px]'>
              <span className='blue-text-gradient'>@</span> {name}
            </p>
            <p className='mt-1 text-secondary text-[12px]'>
              {designation} at {company}
            </p>
          </div>

          <i className={`${image} text-4xl text-[#915EFF]`} />
        </div>
      </div>
    </motion.div>
  );
};

FeedbackCard.propTypes = {
  index: PropTypes.number.isRequired,
  testimonial: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  designation: PropTypes.string.isRequired,
  company: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

export default FeedbackCard;
