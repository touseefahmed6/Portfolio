/* eslint-disable react/prop-types */
import { useState } from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from '../utils/motion';

// @ts-ignore
// eslint-disable-next-line react/prop-types
const ProjectCard = ({ index, name, description, tags, image, additionalImages, live_link }) => {
  const [selectedImage, setSelectedImage] = useState(image);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const allImages = [image, ...additionalImages];

  // @ts-ignore
  const handleImageClick = (index, e) => {
    e.preventDefault();
    setSelectedImage(allImages[index]);
    setCurrentImageIndex(index);
  };

  return (
    <motion.div
      variants={fadeIn("up", "spring", index * 0.5, 0.75)}
      className='bg-tertiary p-4 rounded-2xl w-full sm:w-[320px] h-full flex flex-col'
    >
      <div className='relative w-full h-[200px] group'>
        <img
          src={selectedImage}
          alt={`${name} preview`}
          className='w-full h-full object-cover rounded-2xl'
        />

        <div className='absolute inset-0 flex justify-end m-3 card-img_hover gap-2'>
          {live_link && (
            <div
              onClick={() => window.open(live_link, "_blank")}
              className='black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'
            >
              <svg xmlns="http://www.w3.org/2000/svg" className='w-1/2 h-1/2' viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                <polyline points="15 3 21 3 21 9"></polyline>
                <line x1="10" y1="14" x2="21" y2="3"></line>
              </svg>
            </div>
          )}
        </div>

        {/* Image Navigation Dots */}
        <div className='absolute bottom-2 left-1/2 transform -translate-x-1/2 flex gap-1.5'>
          {allImages.map((_, idx) => (
            <button
              key={idx}
              onClick={(e) => handleImageClick(idx, e)}
              className={`w-2 h-2 rounded-full transition-all ${currentImageIndex === idx ? 'bg-white scale-125' : 'bg-white/50 hover:bg-white/80'
                }`}
              aria-label={`View image ${idx + 1}`}
            />
          ))}
        </div>
      </div>

      <div className='mt-4 flex-grow'>
        <h3 className='text-white font-bold text-[20px]'>{name}</h3>
        <p className='mt-2 text-secondary text-[13px] leading-[17px]'>{description}</p>
      </div>

      <div className='mt-3 flex flex-wrap gap-2'>
        {tags.map((
          // @ts-ignore
          tag) => (
          <p
            key={`${name}-${tag.name}`}
            className={`text-[12px] ${tag.color}`}
          >
            #{tag.name}
          </p>
        ))}
      </div>
    </motion.div>
  );
};

export default ProjectCard;
