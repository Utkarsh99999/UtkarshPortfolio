import LineGradient from "../components/LineGradient";
import { motion } from "framer-motion";
import img1 from '../techstack/bootstrap.png';
import img2 from '../techstack/c++.jpeg';
import img3 from '../techstack/css.png';
import img4 from '../techstack/github.png';
import img5 from '../techstack/html.png';
import img6 from '../techstack/javascript.png';
import img7 from '../techstack/mongodb.jpg';
import img17 from '../techstack/mysql.png';
import img8 from '../techstack/nextjs.png';
import img9 from '../techstack/nodejs.png';
import img10 from '../techstack/postman.png';
import img12 from '../techstack/react-query.png';
import img13 from '../techstack/reactformic.png';
import img14 from '../techstack/reactjs.png';
import img15 from '../techstack/reduxjs.png';
import img16 from '../techstack/vscode.png';

const techstack1 = [
  img1,img2,img3,img4,img5,img6,img7,img8,img9,img10,img12,img13,img14,img15,img16,img17
]

const Testimonials = () => {
  return (
    <section id="techstack" className="pt-16 pb-16">
      {/* HEADING */}
      <motion.div
        className="md:w-1/3 text-center md:text-left"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, x: -50 },
          visible: { opacity: 1, x: 0 },
        }}
      >
        <p className="font-playfair font-semibold text-4xl mb-2  text-red">
          My TechStack
        </p>
        <LineGradient width="mx-auto w-2/5" />
      </motion.div>


      <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -100 },
            visible: { opacity: 1, x: 0 },
          }}
        >
      <div className="flex justify-between bg-blue gap-8 md:gap-8 mt-10 p-10 flex-wrap">
      {techstack1.map((val,index)=>{
        return (
          <motion.div
          className="mx-auto relativ flex flex-col justify-center"
          initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 1 }} variants={{ hidden: { opacity: 0, scale: 0.5 },
            visible: { opacity: 1, scale: 1 }}}>
          <img key={index} src={val} alt={val} style={{width:"100px",height:'auto'}} />
        </motion.div>
       )})}
      </div>
      </motion.div>
    </section>
  );
};

export default Testimonials;
