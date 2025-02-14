import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { styles } from "../styles";

const TechComponent = () => {
  return (
    <>
      <div>
        <p className={styles.sectionSubText}>My technical skills</p>
        <h2 className={styles.sectionHeadText}>Technologies.</h2>
      </div>

      <div className='flex flex-row flex-wrap justify-center gap-10 mt-10'>
        {technologies.map((technology) => (
          technology.icon && (
            <div className='w-28 h-28 relative' key={technology.name}>
              <div className="w-full h-full">
                <BallCanvas icon={technology.icon} />
              </div>
              <p className="text-center mt-2 text-secondary text-[14px] absolute -bottom-6 left-0 right-0">
                {technology.name}
              </p>
            </div>
          )
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(TechComponent, "tech");
