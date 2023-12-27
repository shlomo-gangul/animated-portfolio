import "./navbar.scss";
import Sidebar from "../sidebar/Sidebar";
import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <div className="navbar">
      <Sidebar />
      <div className="wrapper">
        <motion.span
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          Shlomo Gangul
        </motion.span>
        <div className="social">
          <a href="https://www.facebook.com/shlomo.gangul.3/">
            <img src="/facebook.png" alt="" />
          </a>
          <a href="https://www.linkedin.com/in/shlomo-gangul/">
            <img src="/linkedin.png" alt="" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
