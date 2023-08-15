import SocialMediaIcons from "../components/SocialMediaIcons";
import useMediaQuery from "../hooks/useMediaQuery";
import { motion } from "framer-motion";
import AnchorLink from "react-anchor-link-smooth-scroll";
import React from "react";
import Typewriter from "typewriter-effect";
import Tilt from "react-parallax-tilt";

const Landing = ({ setSelectedPage }) => {
  const isAboveLarge = useMediaQuery("(min-width: 1060px)");
  return (
    <section
      id="home"
      className="md:flex md:justify-between md:items-center gap-16 md:h-full py-10"
    >
      <div className="basis-3/5 z-10 mt-16 md:mt-32 flex justify-center md:order-2">
        {isAboveLarge ? (
          <div
            className="relative z-0 ml-20 before:absolute before:-top-20 before:-left-20 
            before:w-full before:max-w-[400px] md:before:max-w-[600px] before:h-full before:border-2 before:border-blue before:z-[-1]"
          >
          <Tilt glareEnable={true} tiltMaxAngleX={20} tiltMaxAngleY={20}perspective={2000} glareColor={"rgb(255,0,0)"}>
          <img alt="profile" src="assets/image1.jpg" className="hover:filter hover:saturate-200 
            transition duration-500 z-10 w-full max-w-[400px] md:max-w-[600px]"/>
            </Tilt>
          </div> 
          ) : ( 
          <Tilt glareEnable={true} tiltMaxAngleX={20} tiltMaxAngleY={20}perspective={2000} glareColor={"rgb(255,0,0)"}>
        <img alt="profile"className="z-10 w-full max-w-[400px] md:max-w-[600px]"src="assets/image1.jpg"/>
         </Tilt>
         
        )}
      </div>

      {/* MAIN TEXT */}
      <div className="z-30 basis-2/5 mt-12 md:mt-32">
        {/* HEADINGS */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <span className="text-6xl font-playfair z-10 text-center md:text-start">
            <p className="text-red">
            <Typewriter
              options={{
                strings: ["Utkarsh"],
                autoStart: true,
                loop: true,
              }}
            />
            </p>
            <Typewriter
              options={{
                strings: ["Singh Tiwari"],
                autoStart: true,
                loop: true,
              }}
            />
            {" "}
             
          </span>

          <p className="mt-5 mb-7 text-sm text-center md:text-start">
            Hello,I'm Utkarsh, a passionate full-stack developer deeply in love
            with React.js.
            {/* With expertise in both front-end and back-end development, I thrive in the world 
          of creating dynamic web applications. */}
          </p>
        </motion.div>

        {/* CALL TO ACTIONS */}
        <motion.div
          className="flex mt-5 justify-center md:justify-start"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <AnchorLink
            className="bg-gradient-rainblue text-deep-blue rounded-sm py-3 px-7 font-semibold
              hover:bg-blue hover:text-white transition duration-500"
            onClick={() => setSelectedPage("contact")}
            href="#contact"
          >
            Contact Me
          </AnchorLink>
          <AnchorLink
            className="rounded-r-sm bg-gradient-rainblue py-0.5 pr-0.5"
            onClick={() => setSelectedPage("contact")}
            href="#contact"
          >
            <div className="bg-deep-blue hover:text-red transition duration-500 w-full h-full flex items-center justify-center px-10 font-playfair">
              Let's talk.
            </div>
          </AnchorLink>
        </motion.div>

        <motion.div
          className="flex mt-5 justify-center md:justify-start"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <SocialMediaIcons />
        </motion.div>
      </div>
    </section>
  );
};

export default Landing;
