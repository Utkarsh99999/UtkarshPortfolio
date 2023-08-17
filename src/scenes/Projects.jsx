import LineGradient from "../components/LineGradient";
import ReactCardFlip from "react-card-flip";
import { motion } from "framer-motion";
import React, {useState} from 'react';

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const projectVariant = {
  hidden: { opacity: 0, scale: 0.5 },
  visible: { opacity: 1, scale: 1 },
};

const Project = ({ title ,Description }) => {
  const overlayStyles = `transition duration-10 bg-red flex flex-col justify-center 
  items-center text-center md:h-[350px] w-full max-h-[350px] max-w-[400px] md:max-w-[600px] text-deep-blue`;
  const projectTitle = title.split(" ").join("-").toLowerCase();
  const [flip,SetFlip] = useState(false);
  return (
    <motion.div variants={projectVariant} className="relative">
      <ReactCardFlip isFlipped={flip} flipDirection="vertical">
      <div className="relative">
      <img src={`../assets/${title}.png`} alt={projectTitle} className="max-h-[350px] max-w-[400px]"/>
      <button onClick={()=>{SetFlip(!flip)}} className="absolute bottom-5 left-28 p-2
       text-deep-blue border border-solid bg-red" >Project Description</button>
      </div>
      <div className={overlayStyles}>
        <p className="text-2xl font-playfair">{title}</p>
        <p className="mt-4">{Description}</p>
        <button onClick={()=>{SetFlip(!flip)}} className="absolute bottom-5 left-32 p-2 
        text-deep-blue border border-solid bg-blue">Project Image</button>
      </div>
      </ReactCardFlip> 
    </motion.div>
  );
};

const Projects = () => {

  const Description = {
    d1:'Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem  imperdiet et, porttitor at sem'+
    ' Nulla porttitor accumsan tincidunt.  imperdiet et, porttitor at sem  imperdiet et, porttitor at sem'+
    ' Nulla porttitor accumsan tincidunt.  imperdiet et, porttitor at sem  imperdiet et, porttitor at sem',
    d2:'Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem  imperdiet et, porttitor at sem'+
    ' Nulla porttitor accumsan tincidunt.  imperdiet et, porttitor at sem  imperdiet et, porttitor at sem'+
    ' Nulla porttitor accumsan tincidunt.  imperdiet et, porttitor at sem  imperdiet et, porttitor at sem',
    d3:'Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem  imperdiet et, porttitor at sem'+
    ' Nulla porttitor accumsan tincidunt.  imperdiet et, porttitor at sem  imperdiet et, porttitor at sem'+
    ' Nulla porttitor accumsan tincidunt.  imperdiet et, porttitor at sem  imperdiet et, porttitor at sem',
    d4:'Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem  imperdiet et, porttitor at sem'+
    ' Nulla porttitor accumsan tincidunt.  imperdiet et, porttitor at sem  imperdiet et, porttitor at sem'+
    ' Nulla porttitor accumsan tincidunt.  imperdiet et, porttitor at sem  imperdiet et, porttitor at sem',
  }
 
  return (
    <section id="projects" className="pt-28 pb-28 mt-60">
      {/* HEADINGS */}
      <motion.div
        className="md:w-2/5 mx-auto text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, y: -50 },
          visible: { opacity: 1, y: 0 },
        }}
      >
        <div>
          <p className="font-playfair font-semibold text-4xl">
            <span className="text-red">PRO</span>JECTS
          </p>
          <div className="flex justify-center mt-5">
            <LineGradient width="w-2/3" />
          </div>
        </div>
        <p className="mt-10 mb-10">
        As i am passinate about fullstack development I think creative and imaginative.
        I Had created some creative, efficient performing and respponsive projects.
        </p>
      </motion.div>

      {/* PROJECTS */}
      <div className="flex justify-center">
        <motion.div
          className="sm:grid sm:grid-cols-3"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
         <div className="flex justify-center text-center items-center p-10 bg-blue
              max-w-[400px] max-h-[400px] text-2xl font-playfair font-semibold">
            BEAUTIFUL USER INTERFACES
          </div>

          <Project title="project-1" Description={Description.d1} />
          <Project title="project-2" Description={Description.d2} />

          {/* ROW 2 */}
          <Project title="project-3" Description={Description.d3}/>
          <Project title="project-4"Description={Description.d4}/>
          
          <div className="flex justify-center text-center items-center p-10 bg-blue
              max-w-[400px] max-h-[400px] text-2xl font-playfair font-semibold"
          >
            SMOOTH USER EXPERIENCE
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
