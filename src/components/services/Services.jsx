import { useRef } from "react";
import "./services.scss";
import { motion, useInView } from "framer-motion";

const variants = {
  initial: {
    x: -500,
    y: 100,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
};

const Services = () => {
  const ref = useRef();

  const isInView = useInView(ref, { margin: "-100px" });

  return (
    <div ref={ref} className="servicesContainer">
      <motion.div
        className="services"
        variants={variants}
        initial="initial"
        animate={isInView && "animate"}
      >
        <motion.div className="textContainer" variants={variants}>
          <p>
            focus on helping your company grow <br /> and move forword together
          </p>
          <hr />
        </motion.div>
        <motion.div className="titleContainer" variants={variants}>
          <div className="title">
            <img src="/people.webp" alt="" />
            <h1>
              <motion.b whileHover={{ color: "orange" }}>Creative</motion.b>{" "}
              Ideas
            </h1>
          </div>
          <div className="title">
            <h1>
              <motion.b whileHover={{ color: "orange" }}>For your</motion.b>{" "}
              company.
            </h1>
            <button>WHAT DO I KNOW?</button>
          </div>
        </motion.div>
        <motion.div className="listContainer" variants={variants}>
          <motion.div
            className="box"
            whileHover={{ background: "lightgray", color: "black" }}
          >
            <h2>Front-End</h2>
            <p>HTML, CSS, JavaScript,TypeScript React, Bootstraps.</p>
          </motion.div>
          <motion.div
            className="box"
            whileHover={{ background: "lightgray", color: "black" }}
          >
            <h2>Back-End</h2>
            <p>
              MongoDB, MSSQL, Nodejs OOP, Using Express,C#, Asp.Net MVC,
              Ado.Net, API.
            </p>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Services;
